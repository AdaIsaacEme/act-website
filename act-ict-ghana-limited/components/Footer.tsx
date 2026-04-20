import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useContent } from "../context/ContentContext";
import TrustedPartnersCube from "./TrustedPartnersCube";
import AnimatedLink from "./AnimatedLink";
import AnimatedButton from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";

const Footer: React.FC = () => {
  const { content } = useContent();
  const location = useLocation();
  const isMiningPage = location.pathname === "/mining";
  const isProjectsPage = location.pathname === "/projects";
  const hideCTA = isMiningPage || isProjectsPage;

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* CTA Strip - Hidden on mining and projects pages */}
      {!hideCTA && (
        <ScrollReveal
          direction="up"
          delay={0.1}
          className="py-8 px-4 text-center"
          style={{ backgroundColor: "#00A8E8" }}
        >
          <h3 className="font-display text-2xl text-white">
            Ready to transform your operations?
          </h3>
          <Link
            to="/contact"
            className="mt-4 inline-block font-bold px-8 py-3 rounded-lg transition-all duration-300 btn-lift hover:bg-gray-100"
            style={{ backgroundColor: "white", color: "#00A8E8" }}
          >
            Get in Touch →
          </Link>
        </ScrollReveal>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 my-8 md:my-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/images/logo/act-ict-logo.png"
              alt="ACT-ICT Ghana Limited"
              className="h-8 sm:h-10 w-auto object-contain mb-3 sm:mb-4"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                if (img.parentElement) {
                  const fallback = document.createElement("div");
                  fallback.className = "flex flex-col mb-4";
                  fallback.innerHTML =
                    '<h2 class="font-display text-3xl font-extrabold text-white tracking-tighter">ACT-ICT</h2><span class="text-[10px] text-[#7A9ABD] font-semibold tracking-widest -mt-1">GHANA LIMITED</span>';
                  img.parentElement.insertBefore(fallback, img.nextSibling);
                }
              }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Leading the way in technological innovation. Providing top-tier
              IT, Security, and Engineering solutions across Ghana and West
              Africa.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href={content.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00A8E8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <Facebook size={20} />
              </a>
              <a
                href={content.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00A8E8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <Linkedin size={20} />
              </a>
              <a
                href={content.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00A8E8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <Twitter size={20} />
              </a>
              <a
                href={content.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00A8E8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display text-lg font-bold mb-6"
              style={{ color: "#00A8E8" }}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-3 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>
                <AnimatedLink
                  to="/about"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  About Us
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink
                  to="/act-ict"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  ACT-ICT Division
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink
                  to="/act-global"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  ACTGlobal Division
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink
                  to="/projects"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  Our Projects
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink
                  to="/solutions"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  Solutions & Services
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink
                  to="/contact"
                  className="hover:text-[#00A8E8] transition-all duration-300"
                >
                  Contact Support
                </AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-display text-lg font-bold mb-6"
              style={{ color: "#00A8E8" }}
            >
              Contact Us
            </h3>
            <ul
              className="space-y-4 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <a
                  href="https://maps.app.goo.gl/nGFsDiXuHMVzQKEr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00A8E8] transition-colors duration-300"
                >
                  {content.contact.address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" size={16} />
                <a
                  href={`tel:${content.contact.phone}`}
                  className="hover:text-[#00A8E8] transition-colors duration-300"
                >
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" size={16} />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="hover:text-[#00A8E8] transition-colors duration-300"
                >
                  {content.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Trusted Partners */}
          <div>
            <h3
              className="font-display text-lg font-bold mb-6"
              style={{ color: "#00A8E8" }}
            >
              Trusted Partners
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Official technology partners across global brands
            </p>
            <TrustedPartnersCube />
          </div>
        </div>

        <div
          className="border-t"
          style={{
            borderColor: "var(--border-color)",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "10px",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} ACT-ICT Ghana Limited. All rights
            reserved. | Cantonments, Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
