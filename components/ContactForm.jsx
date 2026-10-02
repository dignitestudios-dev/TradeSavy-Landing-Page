"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  // Automatically clean any leftover query params from URL bar
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + (window.location.hash || "")
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setStatus({ submitted: true, loading: false, error: null });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A1526] py-20 md:py-28 text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-skyblue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="section-px mx-auto max-w-6xl relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#FAD88E]/30 bg-[#FAD88E]/10 px-4 py-1.5 text-xs font-semibold text-[#FAD88E]">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base leading-relaxed">
            Have questions about renting, lending, or your account? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-panel/60 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                Reach out to us directly through any of the channels below or fill out the form.
              </p>

              <div className="mt-6 space-y-5">
                <a
                  href="mailto:tradesavvy777@aol.com"
                  className="flex items-start gap-3.5 group rounded-xl p-2.5 transition hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAD88E]/10 text-[#FAD88E]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-muted">Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#FAD88E] transition break-all">
                      tradesavvy777@aol.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:16614767134"
                  className="flex items-start gap-3.5 group rounded-xl p-2.5 transition hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAD88E]/10 text-[#FAD88E]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-muted">Phone</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#FAD88E] transition">
                      16614767134
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 rounded-xl p-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FAD88E]/10 text-[#FAD88E]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-muted">Office Address</span>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      Trade Savvy LLC<br />
                      7311 Road 87<br />
                      Paulding 45879-9510, United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-2 text-xs text-muted">
                <Clock size={14} className="text-[#FAD88E]" />
                <span>Response time: usually within 24 business hours.</span>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-panel/70 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              {status.submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been sent successfully. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false, error: null })}
                    className="mt-6 rounded-xl bg-[#FAD88E] px-6 py-2.5 text-sm font-semibold text-[#152442] hover:bg-gold-dark transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  action="#"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-[#FAD88E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FAD88E] focus:outline-none focus:ring-1 focus:ring-[#FAD88E] transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-[#FAD88E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FAD88E] focus:outline-none focus:ring-1 focus:ring-[#FAD88E] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FAD88E] focus:outline-none focus:ring-1 focus:ring-[#FAD88E] transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message <span className="text-[#FAD88E]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FAD88E] focus:outline-none focus:ring-1 focus:ring-[#FAD88E] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAD88E] px-8 py-3.5 text-sm font-semibold text-[#152442] hover:bg-gold-dark transition disabled:opacity-60 cursor-pointer shadow-lg w-full sm:w-auto"
                  >
                    {status.loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
