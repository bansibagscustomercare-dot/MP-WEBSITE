import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, whatsappChatURL } from "../data/site";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white" data-testid="footer">
      <div className="container-mp py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 text-center md:text-left">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="MP Industries logo"
              style={{ height: 48, width: "auto", objectFit: "contain", display: "block" }}
            />
            <div>
              <div className="font-display font-bold text-[20px] tracking-tight">MP Industries</div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mt-1">Concrete Mixer Parts</div>
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60 max-w-md mx-auto md:mx-0">
            {SITE.tagline}. Precision concrete mixer machine parts, manufactured in Ahmedabad and supplied across India, Africa and the Middle East.
          </p>
          <a
            href={whatsappChatURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-[15px] text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#25D366" }}
            data-testid="footer-whatsapp-btn"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase font-bold tracking-[0.12em] text-white/55">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[15px] text-white/75 hover:text-[#C04028] transition-colors"
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/ /g, "-")}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[11px] uppercase font-bold tracking-[0.12em] text-white/55">Contact</h4>
          <ul className="mt-4 space-y-3 text-[15px] text-white/75 inline-block text-left md:block">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-1 text-[#C04028]" />
              <div>
                <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="block hover:text-[#C04028] transition-colors">{SITE.phonePrimary}</a>
                <a href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`} className="block hover:text-[#C04028] transition-colors">{SITE.phoneSecondary}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-1 text-[#C04028]" />
              <a href={`mailto:${SITE.email}`} className="hover:text-[#C04028] transition-colors">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[#C04028]" />
              <span>{SITE.addressShort}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-mp py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} MP Industries®. All rights reserved. <span className="text-white/35">·</span> Registered Trademark ®</p>
          <p>Since 2004 · Ahmedabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
