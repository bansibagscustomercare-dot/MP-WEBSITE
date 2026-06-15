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

      <header className="bg-white border-b border-hairline">
        <div className="container-mp pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="eyebrow">Contact</div>
          <h1 className="h1-section mt-2">Get in Touch</h1>
          <p className="lead mt-3 max-w-2xl">
            Have a requirement or a question? Reach out to us — we respond fast.
          </p>
        </div>
      </header>

      <section className="bg-white">
        <div className="container-mp py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Phone size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-bold text-xl text-ink">Call us directly</h2>
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
              <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-graphite">
                <Clock size={14} /> Mon–Sat · 9:30 AM – 7:00 PM IST
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#E6F8EE" }}>
                  <MessageCircle size={20} color="#25D366" />
                </div>
                <h2 className="font-display font-bold text-xl text-ink">WhatsApp</h2>
              </div>
              <p className="text-[15px] text-graphite">
                The fastest way to reach us. Share your part name, quantity and location — we'll respond with availability.
              </p>
              <a
                href={whatsappChatURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                style={{ backgroundColor: "#25D366" }}
                data-testid="contact-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Mail size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-bold text-xl text-ink">Email</h2>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-lg font-semibold text-ink hover:text-[#D05030] transition-colors"
                data-testid="contact-email"
              >
                {SITE.email}
              </a>
            </div>

            {/* Address */}
            <div className="card-mp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <MapPin size={20} color="#D05030" />
                </div>
                <h2 className="font-display font-bold text-xl text-ink">Address</h2>
              </div>
              <p className="text-[15px] text-graphite leading-relaxed" data-testid="contact-address">
                {SITE.addressFull}
              </p>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal className="lg:col-span-7" delay={120}>
            <div className="rounded-card overflow-hidden border border-hairline h-full min-h-[420px] bg-surface" data-testid="contact-map">
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
