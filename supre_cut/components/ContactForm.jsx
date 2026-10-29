"use client";

import { useState } from "react";
import { GROTESK_FONT } from "./fonts";

const EMPTY = { first: "", middle: "", last: "", phone: "", email: "", message: "" };

const inputClass =
  "w-full bg-[#e4e4e4] text-[#111] placeholder:text-neutral-500 placeholder:font-semibold rounded-md px-4 py-3 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-[#e5233d]";

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
    <section className="bg-[#f5f5f5] py-20 lg:py-24" style={{ fontFamily: GROTESK_FONT }}>
      <div className="px-4 sm:px-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-[40px] sm:text-[50px] font-semibold text-[#111] tracking-tight leading-none">Get in Touch.</h2>
          <p className="mt-4 text-neutral-600 text-[15.5px] leading-relaxed">
            We're here to help. Whether you have questions about our products or need support, our team is ready to assist you.
          </p>
          <p className="mt-2 text-[#e5233d] text-[13px]">* denotes required field.</p>
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
            <button type="submit" className="bg-[#e5233d] text-white font-semibold text-[15px] px-12 py-3 rounded-md hover:bg-[#c01b32] transition-colors cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
