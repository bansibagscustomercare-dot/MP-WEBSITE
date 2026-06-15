import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_#E0E0E0,0_8px_24px_-18px_rgba(0,0,0,0.18)]" : ""
      }`}
      data-testid="navbar"
    >
      <nav
        className="container-mp flex items-center justify-between"
        style={{ height: "var(--nav-height)" }}
        aria-label="Primary"
      >
        <Link to="/" aria-label="MP Industries — Home" data-testid="navbar-logo-link">
          <Logo />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative inline-flex items-center px-4 py-2 rounded-md text-[15px] font-medium transition-colors ${
                    isActive ? "text-[#D05030]" : "text-ink hover:text-[#D05030]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-all ${
                        isActive ? "bg-[#D05030] opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Link to="/contact" className="btn-primary" data-testid="nav-cta-contact">
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-hairline"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-x-0 top-[var(--nav-height)] z-40 bg-white border-t border-hairline transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-[120%]"
        }`}
        style={{ maxHeight: "calc(100vh - var(--nav-height))", overflowY: "auto" }}
        data-testid="mobile-drawer"
      >
        <ul className="container-mp py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-[16px] font-medium ${
                    isActive ? "text-[#D05030] bg-[#FBF0ED]" : "text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link to="/contact" className="btn-primary w-full" data-testid="mobile-cta-contact">
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
