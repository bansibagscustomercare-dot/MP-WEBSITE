import React, { useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { buildWhatsAppInquiryURL } from "../data/site";

export const InquiryModal = ({ open, product, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [customPart, setCustomPart] = useState(false);
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setCustomPart(false);
      setErrors({});
      lastActiveRef.current = document.activeElement;
      setTimeout(() => firstFieldRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      lastActiveRef.current?.focus?.();
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, product]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll(
          'a, button, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const list = Array.from(focusables).filter((el) => !el.disabled);
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open || !product) return null;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    const cleaned = phone.replace(/[\s\-+()]/g, "");
    if (!cleaned) e.phone = "Please enter your phone number.";
    else if (!/^\d{7,15}$/.test(cleaned)) e.phone = "Enter a valid phone number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    const url = buildWhatsAppInquiryURL({
      productName: product.name,
      name: name.trim(),
      phone: phone.trim(),
      customPart,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      data-testid="inquiry-modal"
    >
      <div
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
        aria-hidden="true"
        data-testid="inquiry-modal-overlay"
      />
      <div
        ref={dialogRef}
        className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl animate-modal-in p-7 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: "#3D3D3D" }}
            >
              Send Inquiry
            </div>
            <h2
              id="inquiry-modal-title"
              className="mt-1 font-display font-bold text-[22px] tracking-tight"
              style={{ color: "#C04028" }}
            >
              {product.name}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close inquiry"
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-none border border-hairline hover:bg-surface"
            data-testid="inquiry-modal-close-btn"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5" noValidate>
          <p className="text-[14px] mb-5" style={{ color: "#3D3D3D" }}>
            Share your details — we'll continue the conversation on WhatsApp.
          </p>

          <label className="block mb-3.5">
            <span className="block text-[13px] font-semibold mb-1.5" style={{ color: "#1A1A1A" }}>
              Your Name <span style={{ color: "#C04028" }}>*</span>
            </span>
            <input
              ref={firstFieldRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rakesh Patel"
              autoComplete="name"
              data-testid="inquiry-name-input"
              className={`w-full h-11 px-4 rounded-none border bg-white text-[15px] outline-none transition-colors focus:border-[#C04028] focus:ring-2 focus:ring-[#C04028]/15 ${
                errors.name ? "border-red-500" : "border-hairline"
              }`}
            />
            {errors.name && (
              <span className="block mt-1 text-[12.5px] text-red-600" data-testid="inquiry-name-error">
                {errors.name}
              </span>
            )}
          </label>

          <label className="block mb-3.5">
            <span className="block text-[13px] font-semibold mb-1.5" style={{ color: "#1A1A1A" }}>
              Phone Number <span style={{ color: "#C04028" }}>*</span>
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98XXXXXXXX"
              autoComplete="tel"
              inputMode="tel"
              data-testid="inquiry-phone-input"
              className={`w-full h-11 px-4 rounded-none border bg-white text-[15px] outline-none transition-colors focus:border-[#C04028] focus:ring-2 focus:ring-[#C04028]/15 ${
                errors.phone ? "border-red-500" : "border-hairline"
              }`}
            />
            {errors.phone && (
              <span className="block mt-1 text-[12.5px] text-red-600" data-testid="inquiry-phone-error">
                {errors.phone}
              </span>
            )}
          </label>

          <label className="flex items-start gap-3 mt-4 mb-5 cursor-pointer">
            <input
              type="checkbox"
              checked={customPart}
              onChange={(e) => setCustomPart(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#C04028]"
              data-testid="inquiry-custom-checkbox"
            />
            <span className="text-[14px]" style={{ color: "#1A1A1A" }}>
              I need a custom part / special specification
            </span>
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-none text-white font-semibold text-[15px] transition-all"
            style={{ backgroundColor: "#C04028" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A03520")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#C04028")}
            data-testid="inquiry-submit-btn"
          >
            <MessageCircle size={18} />
            Send on WhatsApp
          </button>
          <p className="text-[12px] mt-3 text-center" style={{ color: "#3D3D3D" }}>
            By submitting, you'll be redirected to WhatsApp with a pre-filled message.
          </p>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
