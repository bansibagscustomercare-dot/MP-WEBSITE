import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, whatsappChatURL } from "../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="relative z-40 w-full bg-white" data-testid="navbar">
      {/* Utility row (desktop) */}
      <div className="hidden md:block">
        <div className="container-mp flex justify-end items-center gap-6 pt-3 text-[13px] font-semibold tracking-[0.03em] text-[#3A3F45]">
          <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="hover:text-black transition-colors">{SITE.phonePrimary}</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-black transition-colors">{SITE.email}</a>
        </div>
      </div>

      {/* Logo row */}
      <div className="container-mp flex items-center justify-between py-3 md:pt-4 md:pb-3">
        <Link to="/" aria-label="MP Industries — Home" data-testid="navbar-logo-link">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/products" aria-label="Search products" className="text-black hover:text-[#C04028] transition-colors" data-testid="nav-search">
            <Search size={22} strokeWidth={1.75} />
          </Link>
          <a href={whatsappChatURL()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-black hover:text-[#25D366] transition-colors">
            <MessageCircle size={22} strokeWidth={1.75} />
          </a>
          <Link to="/contact" className="btn-primary" data-testid="nav-cta-contact">Get a Quote</Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-hairline"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Nav row (desktop) */}
      <nav className="hidden md:block" aria-label="Primary">
        <ul className="container-mp flex items-center gap-8 pb-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-x-0 top-[68px] bottom-0 z-40 bg-white border-t border-hairline duration-300 ${open ? "translate-y-0" : "-translate-y-[120%]"}`}
        style={{ overflowY: "auto" }}
        data-testid="mobile-drawer"
      >
        <ul className="container-mp py-4 flex flex-col">
          {links.map((l) => (
            <li key={l.to} className="border-b border-hairline">
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) => `block py-4 font-display text-[28px] font-bold ${isActive ? "text-[#C04028]" : "text-black"}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-6">
            <Link to="/contact" className="btn-primary w-full" data-testid="mobile-cta-contact">Get a Quote</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
