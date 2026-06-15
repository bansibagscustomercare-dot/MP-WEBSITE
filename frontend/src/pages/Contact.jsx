import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
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

      <PageHeader
        image="/images/header-contact.png"
        eyebrow="Contact"
        title="Get in Touch."
        subtext="Have a requirement or a question? Reach out to us — we respond fast."
      />

      <section className="bg-cream">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ScrollReveal className="lg:col-span-5 space-y-4">
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Phone size={18} color="#D05030" />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 20, color: "#1A1A1A" }}>
                  Call us directly
                </h2>
              </div>
              <a
                href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
                className="block font-semibold hover:text-[#D05030] transition-colors"
                style={{ fontSize: 16, color: "#1A1A1A" }}
                data-testid="contact-phone-primary"
              >
                {SITE.phonePrimary}
              </a>
              <a
                href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`}
                className="block font-semibold hover:text-[#D05030] transition-colors mt-1"
                style={{ fontSize: 16, color: "#1A1A1A" }}
                data-testid="contact-phone-secondary"
              >
                {SITE.phoneSecondary}
              </a>
              <div className="mt-3 inline-flex items-center gap-2" style={{ color: "#3D3D3D", fontSize: 13 }}>
                <Clock size={13} /> Mon–Sat · 9:30 AM – 7:00 PM IST
              </div>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#E6F8EE" }}>
                  <MessageCircle size={18} color="#25D366" />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 20, color: "#1A1A1A" }}>WhatsApp</h2>
              </div>
              <p style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }}>
                The fastest way to reach us. Share your part name, quantity and location — we'll respond with availability.
              </p>
              <a
                href={whatsappChatURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#25D366", fontSize: 14 }}
                data-testid="contact-whatsapp-btn"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Mail size={18} color="#D05030" />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 20, color: "#1A1A1A" }}>Email</h2>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold hover:text-[#D05030] transition-colors"
                style={{ fontSize: 16, color: "#1A1A1A" }}
                data-testid="contact-email"
              >
                {SITE.email}
              </a>
            </div>

            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <MapPin size={18} color="#D05030" />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 20, color: "#1A1A1A" }}>Address</h2>
              </div>
              <p style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }} data-testid="contact-address">
                {SITE.addressFull}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={100}>
            <div
              className="overflow-hidden h-full min-h-[420px] bg-white"
              style={{ borderRadius: 12, border: "1px solid #E8E8E8" }}
              data-testid="contact-map"
            >
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
