import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE, whatsappChatURL } from "../data/site";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact MP Industries | Ahmedabad — Concrete Mixer Parts Manufacturer"
        description="Get in touch with MP Industries, Ahmedabad. Two-phone direct line, WhatsApp chat, email and Google Maps location. Fast responses for product inquiries and bulk orders."
        keywords="MP Industries contact, mixer parts supplier Ahmedabad, mixer parts WhatsApp, concrete mixer parts India phone"
        path="/contact"
      />

      <header className="bg-cream">
        <div className="container-mp pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="eyebrow">Contact</div>
          <h1 className="h1-hero mt-6">Get in Touch.</h1>
          <p className="lead mt-4 max-w-2xl">
            Have a requirement or a question? Reach out to us — we respond fast.
          </p>
        </div>
      </header>

      <section className="bg-cream">
        <div className="container-mp pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5 space-y-4">
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Phone size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-semibold text-[20px]" style={{ color: "#1A1A1A" }}>Call us directly</h2>
              </div>
              <a
                href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
                className="block text-lg font-semibold text-ink hover:text-[#D05030] transition-colors"
                data-testid="contact-phone-primary"
              >
                {SITE.phonePrimary}
              </a>
              <a
                href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`}
                className="block text-lg font-semibold text-ink hover:text-[#D05030] transition-colors mt-1"
                data-testid="contact-phone-secondary"
              >
                {SITE.phoneSecondary}
              </a>
              <div className="mt-3 inline-flex items-center gap-2 text-[13px]" style={{ color: "#3D3D3D" }}>
                <Clock size={14} /> Mon–Sat · 9:30 AM – 7:00 PM IST
              </div>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#E6F8EE" }}>
                  <MessageCircle size={20} color="#25D366" />
                </div>
                <h2 className="font-display font-semibold text-[20px]" style={{ color: "#1A1A1A" }}>WhatsApp</h2>
              </div>
              <p className="text-[15px]" style={{ color: "#3D3D3D" }}>
                The fastest way to reach us. Share your part name, quantity and location — we'll respond with availability.
              </p>
              <a
                href={whatsappChatURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#25D366" }}
                data-testid="contact-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Mail size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-semibold text-[20px]" style={{ color: "#1A1A1A" }}>Email</h2>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-lg font-semibold text-ink hover:text-[#D05030] transition-colors"
                data-testid="contact-email"
              >
                {SITE.email}
              </a>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <MapPin size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-semibold text-[20px]" style={{ color: "#1A1A1A" }}>Address</h2>
              </div>
              <p className="text-[15px] leading-relaxed" style={{ color: "#3D3D3D" }} data-testid="contact-address">
                {SITE.addressFull}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={120}>
            <div className="rounded-card overflow-hidden h-full min-h-[420px] bg-white" style={{ border: "1px solid #E8E8E8" }} data-testid="contact-map">
              <iframe
                title="MP Industries — Ahmedabad location"
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
