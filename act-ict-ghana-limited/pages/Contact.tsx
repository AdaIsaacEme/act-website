import React, { useState } from "react";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedButton from "../components/AnimatedButton";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

// The form opens the visitor's own email app with their message filled in, addressed to
// OFFICE_EMAIL (the same approach as the previous act-ict.com site). No outside service is used.
const OFFICE_EMAIL = "office@act-ict.com";

type Status = "idle" | "mailto";

const fieldClass =
  "w-full px-4 py-3 rounded-lg border focus:border-[color:var(--accent-text)] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300";
const fieldStyle: React.CSSProperties = {
  backgroundColor: "var(--bg-primary)",
  borderColor: "var(--border-color)",
  color: "var(--text-primary)",
};
const cardClass =
  "block rounded-xl p-6 border hover:border-[color:var(--accent-text)] transition-all duration-300";
const cardStyle: React.CSSProperties = {
  backgroundColor: "var(--bg-surface)",
  borderColor: "var(--border-color)",
};

const telHref = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;

const Contact: React.FC = () => {
  const { content } = useContent();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "General Inquiry");
    const message = String(data.get("message") || "").trim();
    const body = `${message}\n\n— ${name}\n${email}${phone ? `\n${phone}` : ""}`;
    window.location.href = `mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(
      `Website: ${subject}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        paddingBottom: "5rem",
      }}
      className="pt-28 sm:pt-32"
    >
      {/* Header with Banner */}
      <ScrollReveal>
        <div
          className="relative overflow-hidden py-20 text-center"
          style={{ marginBottom: "5rem" }}
        >
          <img
            src="/images/banners/contact-banner-v2.webp"
            srcSet="/images/banners/contact-banner-v2-960.webp 960w, /images/banners/contact-banner-v2.webp 1920w"
            sizes="100vw"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1628]/40" />
          <div className="relative">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white/85">
              Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Contact Info Cards */}
          <StaggeredGrid
            fromDirection="alternating"
            staggerDelay={0.06}
            containerDelay={0.1}
            className="space-y-6"
          >
            {/* Phone — one link per number */}
            <div className={cardClass} style={cardStyle}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[color:var(--accent-text)] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="font-semibold text-lg"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Phone
                  </h2>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <a
                      href={telHref(content.contact.phone)}
                      className="inline-block py-1 hover:text-[color:var(--accent-text)]"
                      style={{ color: "inherit" }}
                    >
                      {content.contact.phone}
                    </a>
                    <br />
                    <a
                      href={telHref(content.contact.phone2)}
                      className="inline-block py-1 hover:text-[color:var(--accent-text)]"
                      style={{ color: "inherit" }}
                    >
                      {content.contact.phone2}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <a href={`mailto:${content.contact.email}`} className={cardClass} style={cardStyle}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[color:var(--accent-text)] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="font-semibold text-lg"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Email
                  </h2>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {content.contact.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/nh1LEgKni858MnMo8"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              style={cardStyle}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[color:var(--accent-text)] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="font-semibold text-lg"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Address
                  </h2>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {content.contact.address}
                    <span className="sr-only"> (opens Google Maps)</span>
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/233577700555"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              style={cardStyle}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[color:var(--accent-text)] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MessageCircle size={24} aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="font-semibold text-lg"
                    style={{ color: "var(--text-heading)" }}
                  >
                    WhatsApp
                  </h2>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    +233-577-700-555
                  </p>
                </div>
              </div>
            </a>
          </StaggeredGrid>

          {/* Contact Form */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div
              className="rounded-xl p-5 sm:p-6 md:p-8 border"
              style={cardStyle}
            >
              <h2
                className="font-display text-2xl font-black mb-6"
                style={{ color: "var(--text-heading)" }}
              >
                Send us a Message
              </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={120}
                        className={fieldClass}
                        style={fieldStyle}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={200}
                        className={fieldClass}
                        style={fieldStyle}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Phone <span className="font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={40}
                        className={fieldClass}
                        style={fieldStyle}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className={fieldClass}
                        style={fieldStyle}
                      >
                        <option>General Inquiry</option>
                        <option>Request Quote</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      maxLength={5000}
                      className={`${fieldClass} resize-y`}
                      style={fieldStyle}
                    ></textarea>
                  </div>

                  {status === "mailto" && (
                    <p role="status" className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Your message has opened in your email app.{" "}
                      <strong>Press Send there to deliver it.</strong> If nothing opened, email us
                      at{" "}
                      <a href={`mailto:${OFFICE_EMAIL}`} className="underline text-[color:var(--accent-text)]">
                        {OFFICE_EMAIL}
                      </a>
                      .
                    </p>
                  )}

                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Clicking Send opens your email app with this message ready to send to{" "}
                    {OFFICE_EMAIL}.
                  </p>
                  <AnimatedButton
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg btn-lift"
                    hoverScale={1.05}
                  >
                    Send Message{" "}
                    <Send size={18} className="ml-2" aria-hidden="true" />
                  </AnimatedButton>
                </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Map */}
        <ScrollReveal delay={0.25}>
          <div
            className="rounded-xl overflow-hidden shadow-lg h-96"
            style={{ backgroundColor: "var(--bg-surface)" }}
          >
            <iframe
              title="Map showing the ACT-ICT office in Cantonments, Accra"
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239844.67066752896!2d-0.25359755684031976!3d5.628474630122922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9abd2e1c0b97%3A0x6d8f600786f98aae!2sACT%20ICT%20Ghana%20Ltd!5e0!3m2!1sen!2sgh!4v1778021865165!5m2!1sen!2sgh"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            ></iframe>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
