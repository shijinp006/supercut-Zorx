"use client";

import { useState } from "react";
import { GROTESK_FONT } from "./fonts";

const EMPTY = { first: "", middle: "", last: "", phone: "", email: "", message: "" };

const inputClass =
  "w-full bg-[#163672] border border-white/10 text-white placeholder:text-white/45 placeholder:font-semibold rounded-lg px-4 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-white";

export function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = [form.first, form.middle, form.last].filter(Boolean).join(" ");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:sales@supercutglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#0d2457] text-white border-t border-white/10 py-20 lg:py-24" style={{ fontFamily: GROTESK_FONT }}>
      <div className="px-4 sm:px-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-[40px] sm:text-[50px] font-semibold text-white tracking-tight leading-none">Get in Touch.</h2>
          <p className="mt-4 text-white/70 text-[15.5px] leading-relaxed">
            We're here to help. Whether you have questions about our products or need support, our team is ready to assist you.
          </p>
          <p className="mt-2 text-white/60 text-[13px]">* denotes required field.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <input required value={form.first} onChange={set("first")} placeholder="First Name*" aria-label="First name" className={inputClass} />
            <input value={form.middle} onChange={set("middle")} placeholder="Middle Name" aria-label="Middle name" className={inputClass} />
            <input required value={form.last} onChange={set("last")} placeholder="Last Name*" aria-label="Last name" className={inputClass} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Phone Number*" aria-label="Phone number" className={inputClass} />
            <input required type="email" value={form.email} onChange={set("email")} placeholder="Email*" aria-label="Email" className={inputClass} />
          </div>
          <textarea required rows={8} value={form.message} onChange={set("message")} placeholder="Message*" aria-label="Message" className={`${inputClass} resize-y`} />
          <div className="flex justify-center pt-3">
            <button type="submit" className="bg-white text-[#0b1f4b] font-semibold text-[15px] px-12 py-3 rounded-lg hover:bg-[#dbe4f3] transition-colors cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
