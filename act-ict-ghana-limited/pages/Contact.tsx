import React from "react";
import { useContent } from "../context/ContentContext";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const { content } = useContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting ACT-ICT. We will get back to you shortly.");
  };

  return (
    <div className="pt-32 min-h-screen bg-[#0A1628] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1628] via-[#1E3A5F] to-[#0A1628] py-20 text-center text-white mb-20">
        <h1 className="font-display text-6xl font-black mb-4">Contact Us</h1>
        <p className="text-[#7A9ABD] text-lg">
          Get in touch with our expert team today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+233577700555"
              className="block bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Phone</h4>
                  <p className="text-[#7A9ABD] text-sm hover:text-[#00A8E8]">
                    {content.contact.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:office@act-ict.com.gh"
              className="block bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Email</h4>
                  <p className="text-[#7A9ABD] text-sm hover:text-[#00A8E8]">
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
              className="block bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Address</h4>
                  <p className="text-[#7A9ABD] text-sm hover:text-[#00A8E8]">
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
              className="block bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#00A8E8] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#00A8E8]/10 text-[#00A8E8] rounded-lg ring-1 ring-[#00A8E8]/30">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">WhatsApp</h4>
                  <p className="text-[#7A9ABD] text-sm hover:text-[#00A8E8]">
                    +233-577-700-555
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-8">
            <h3 className="font-display text-2xl font-black text-white mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#7A9ABD] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E3A5F] text-white rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#7A9ABD] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E3A5F] text-white rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#7A9ABD] mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E3A5F] text-white rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Request Quote</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#7A9ABD] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E3A5F] text-white rounded-lg focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#00A8E8]/50"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="bg-[#0F2137] border border-[#1E3A5F] rounded-xl overflow-hidden shadow-lg h-96">
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
      </div>
    </div>
  );
};

export default Contact;
