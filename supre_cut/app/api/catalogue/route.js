import { NextResponse } from "next/server";
import { getDb } from "../../../lib/db";
import { catalogueRequestSchema, fieldErrors } from "../../../lib/validation";
import { createDownloadToken } from "../../../lib/catalogue";
import { sendMail, escapeHtml } from "../../../lib/mail";
import { withHttpLog } from "../../../lib/httpLog";
import { clientIp, readJson, bodyErrorResponse } from "../../../lib/http";
import { hit } from "../../../lib/rateLimit";
import { emailProblem } from "../../../lib/emailCheck";

// Per-IP limit on form submissions (kept in MongoDB, survives restarts)
const MAX_PER_HOUR = 10;

function notificationHtml({ name, email, mobile }, when) {
  const row = (label, value) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#555">${label}</td><td style="padding:6px 0;font-weight:600">${value}</td></tr>`;
  return `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0b1526">
  <h2 style="color:#0b1f4b;margin:0 0 12px">New catalogue download</h2>
  <p style="margin:0 0 16px">Someone filled in the form and downloaded the Super Cut catalogue. Reply to this email to answer them directly.</p>
  <table style="border-collapse:collapse">
    ${row("Name", escapeHtml(name))}
    ${row("Email", escapeHtml(email))}
    ${row("Mobile", escapeHtml(mobile))}
    ${row("Time", escapeHtml(when))}
  </table>
</div>`;
}

export const POST = withHttpLog(async function POST(request, _context, log) {
  const ip = clientIp(request);
  if ((await hit(`catalogue:${ip}`, 60 * 60 * 1000)) > MAX_PER_HOUR) {
    log.warn({ ip }, "catalogue form throttled");
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body;
  try {
    body = await readJson(request);
  } catch (err) {
    return bodyErrorResponse(err);
  }

  const parsed = catalogueRequestSchema.safeParse(body);
  if (!parsed.success) {
    const fields = fieldErrors(parsed.error);
    // A filled honeypot means a bot: answer like a validation error without saying why
    if (fields.company) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    return NextResponse.json({ error: "Check the highlighted fields", fields }, { status: 400 });
  }
  const { name, email, mobile } = parsed.data;

  // Fake or throwaway addresses are refused, so every lead is someone the team can reply to
  const problem = await emailProblem(email);
  if (problem) {
    log.info({ email, reason: problem }, "catalogue email rejected");
    return NextResponse.json({ error: "Check the highlighted fields", fields: { email: problem } }, { status: 400 });
  }
  const now = new Date();

  // Kept in the database too, so no lead is lost if an email fails
  let leadId = crypto.randomUUID();
  try {
    const db = await getDb();
    const { insertedId } = await db.collection("catalogueLeads").insertOne({ name, email, mobile, ip, createdAt: now });
    leadId = insertedId.toString();
  } catch (err) {
    log.error({ err }, "could not save catalogue lead");
  }

  // The visitor still gets the catalogue if the notification email fails; the failure is logged
  try {
    const when = now.toLocaleString("en-GB", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" }) + " (UAE)";
    await sendMail({
      to: (process.env.CATALOGUE_NOTIFY_TO || "").split(",").map((s) => s.trim()).filter(Boolean),
      subject: `Catalogue downloaded by ${name}`,
      html: notificationHtml({ name, email, mobile }, when),
      replyTo: email,
    });
  } catch (err) {
    log.error({ err, leadId }, "catalogue notification email failed");
  }

  log.info({ leadId, email }, "catalogue requested");
  const token = await createDownloadToken(leadId);
  return NextResponse.json({ downloadUrl: `/api/catalogue/download?token=${encodeURIComponent(token)}` });
});
