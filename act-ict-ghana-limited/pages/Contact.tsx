import React from "react";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedButton from "../components/AnimatedButton";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const { content } = useContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting ACT-ICT. We will get back to you shortly.");
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }} className="pt-28 sm:pt-32">
      {/* Header with Banner */}
      <ScrollReveal>
        <div className="relative overflow-hidden py-20 text-center" style={{ marginBottom: '5rem' }}>
          <img
            src="/images/banners/contact-banner.png"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-white">Contact Us</h1>
            <p className="text-lg text-white/80">
              Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Contact Info Cards */}
          <StaggeredGrid fromDirection="alternating" staggerDelay={0.06} containerDelay={0.1} className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+233577700555"
              className="block rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer" 
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-heading)' }}>Phone</h4>
                  <p className="text-sm hover:text-[#00A8E8]" style={{ color: 'var(--text-secondary)' }}>
                    {content.contact.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:office@act-ict.com.gh"
              className="block rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-heading)' }}>Email</h4>
                  <p className="text-sm hover:text-[#00A8E8]" style={{ color: 'var(--text-secondary)' }}>
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
              className="block rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-heading)' }}>Address</h4>
                  <p className="text-sm hover:text-[#00A8E8]" style={{ color: 'var(--text-secondary)' }}>
                    {content.contact.address}
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/233577700555"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-heading)' }}>WhatsApp</h4>
                  <p className="text-sm hover:text-[#00A8E8]" style={{ color: 'var(--text-secondary)' }}>
                    +233-577-700-555
                  </p>
                </div>
              </div>
            </a>
          </StaggeredGrid>

          {/* Contact Form */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-xl p-5 sm:p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <h3 className="font-display text-2xl font-black mb-6" style={{ color: 'var(--text-heading)' }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                    <option>General Inquiry</option>
                    <option>Request Quote</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300 resize-none"
                    style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  ></textarea>
                </div>
                <AnimatedButton
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#00A8E8]/50 btn-lift"
                  hoverScale={1.05}
                >
                  Send Message <Send size={18} className="ml-2" />
                </AnimatedButton>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Map */}
        <ScrollReveal delay={0.25}>
          <div className="rounded-xl overflow-hidden shadow-lg h-96" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
            <iframe
              title="ACT-ICT Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={content.contact.mapUrl}
              className="w-full h-full"
            ></iframe>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
