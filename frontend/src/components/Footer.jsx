import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { SITE, whatsappChatURL } from "../data/site";
import { categories } from "../data/products";

const colTitle = "font-display font-bold text-[20px] text-white";
const colLink = "block text-[14px] font-medium tracking-[0.02em] text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors";

export const Footer = () => {
  return (
    <footer className="bg-black text-white" data-testid="footer">
      <div className="container-mp pt-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/70 text-[13px] font-semibold tracking-[0.03em]">
          <span>India (EN)</span>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:underline underline-offset-4">Contact</Link>
            <a href={whatsappChatURL()} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4" data-testid="footer-whatsapp-btn">WhatsApp</a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 py-10 mt-0">
          <div className="col-span-2 lg:col-span-1">
            <h4 className={colTitle}>Products</h4>
            <ul className="mt-4 space-y-3">
              {categories.filter((c) => c.id !== "all").slice(0, 8).map((c) => (
                <li key={c.id}><Link to={`/products?category=${c.id}`} className={colLink}>{c.label}</Link></li>
              ))}
              <li><Link to="/products" className={colLink}>All products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={colTitle}>Company</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className={colLink} data-testid="footer-link-about-us">About us</Link></li>
              <li><Link to="/about" className={colLink}>Our journey</Link></li>
              <li><Link to="/about" className={colLink}>Leadership</Link></li>
              <li><Link to="/contact" className={colLink} data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className={colTitle}>Contact</h4>
            <ul className="mt-4 space-y-3 text-[14px] text-white/85">
              <li><a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="hover:underline underline-offset-4">{SITE.phonePrimary}</a></li>
              <li><a href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`} className="hover:underline underline-offset-4">{SITE.phoneSecondary}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:underline underline-offset-4 break-words">{SITE.email}</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-2">
            <h4 className={colTitle}>Visit us</h4>
            <address className="mt-4 not-italic text-[14px] leading-relaxed text-white/85 max-w-sm">
              MP Industries®<br />{SITE.addressFull}
            </address>
            <a href={whatsappChatURL()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-white/20">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="MP Industries logo" style={{ height: 36, width: "auto" }} />
            <span className="font-display font-bold text-[22px] tracking-wide">MP INDUSTRIES</span>
          </div>
          <p className="text-[13px] text-white/70 text-center">© {new Date().getFullYear()} MP Industries®. All rights reserved. Registered Trademark ® · Since {SITE.founded}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            data-testid="footer-back-to-top"
            className="inline-flex items-center justify-center w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
