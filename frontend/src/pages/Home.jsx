import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ShieldCheck, Globe2, Factory, Wrench } from "lucide-react";
import SEO from "../components/SEO";
import StatsBar from "../components/StatsBar";
import WorldMap from "../components/WorldMap";
import ScrollReveal from "../components/ScrollReveal";
import ProductCard from "../components/ProductCard";
import InquiryModal from "../components/InquiryModal";
import { products } from "../data/products";
import { SITE, whatsappChatURL } from "../data/site";

const teaserProducts = [
  products.find((p) => p.name === "Drum & Yoke"),
  products.find((p) => p.name === "12 Teeth Bevel Gear (Heavy)"),
  products.find((p) => p.name === "85 Teeth Millar Ring"),
  products.find((p) => p.name === "Plain Bearing With Bush"),
].filter(Boolean);

const Home = () => {
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "MP Industries",
        url: SITE.domain,
        logo: `${SITE.domain}/favicon.svg`,
        foundingDate: "2004",
        slogan: SITE.tagline,
        sameAs: [],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phonePrimary,
            contactType: "sales",
            areaServed: ["IN", "Africa", "Middle East"],
            availableLanguage: ["en", "hi", "gu"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.domain}/#localbusiness`,
        name: "MP Industries",
        image: `${SITE.domain}/favicon.svg`,
        telephone: SITE.phonePrimary,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        url: SITE.domain,
      },
    ],
  };

  return (
    <>
      <SEO
        title="MP Industries | Concrete Mixer Machine Parts Manufacturer — Ahmedabad, India"
        description="MP Industries — 20+ years manufacturing 69+ precision concrete mixer machine parts. Pan-India supply. Export to Africa & Middle East. Built for the machines that build India."
        keywords="concrete mixer parts, cement mixer machine parts, drum & yoke manufacturer, bevel gear, mixer ring gear, mixer pulley, Ahmedabad mixer parts, mixer machine spare parts India, OEM mixer parts, mixer parts export Africa, Middle East mixer supplier"
        path="/"
        jsonLd={jsonLd}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-bg relative" data-testid="hero-section">
        <div className="hero-overlay" />
        <div className="relative container-mp pt-24 pb-32 md:pt-32 md:pb-40 min-h-[88vh] flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-white/90 text-[12px] font-semibold uppercase tracking-[0.18em] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D05030]" />
              Registered ® Manufacturer · Since 2004
            </div>
            <h1
              className="display-h text-white font-display"
              style={{ fontSize: "clamp(2.5rem, 6.4vw, 5rem)", lineHeight: 1.02 }}
              data-testid="hero-headline"
            >
              Built for the machines<br className="hidden sm:block" /> that
              <span style={{ color: "#FF7350" }}> build India</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] sm:text-[19px] text-white/85 leading-relaxed">
              Premium concrete mixer machine parts — engineered in Ahmedabad,
              trusted by manufacturers across India, Africa & the Middle East.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary text-base px-7 py-3.5" data-testid="hero-cta-products">
                Explore 69+ Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-semibold text-[15px] text-white border-2 border-white/40 hover:bg-white hover:text-ink transition-colors"
                data-testid="hero-cta-contact"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70 text-[13px]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[#FF7350]" /> Registered ® Brand</span>
              <span className="inline-flex items-center gap-2"><Factory size={16} className="text-[#FF7350]" /> Direct Manufacturer</span>
              <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#FF7350]" /> 3-Continent Supply</span>
            </div>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white/70 flex flex-col items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-semibold animate-chevron-bounce"
            data-testid="hero-scroll-indicator"
            aria-hidden="true"
          >
            <span>Scroll</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── CATALOG TEASER ───────────────────────────────────────────── */}
      <section className="bg-white" data-testid="catalog-teaser">
        <div className="container-mp py-20 md:py-24">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow">The Catalog</div>
              <h2 className="h1-section mt-2">
                Every component a mixer needs — under one roof.
              </h2>
              <p className="lead mt-4">
                Drums, gears, shafts, bearings, pulleys, clutch systems, brake
                assemblies and more. 69+ precision-engineered parts ready to
                ship across India and overseas.
              </p>
            </div>
            <Link to="/products" className="btn-secondary self-start md:self-end" data-testid="teaser-view-all-btn">
              View Full Catalog
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teaserProducts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 70}>
                <ProductCard product={p} onInquire={setInquiryProduct} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLD MAP / REACH ────────────────────────────────────────── */}
      <section className="bg-surface" data-testid="world-map-section">
        <div className="container-mp py-20 md:py-24">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow">Our Reach</div>
            <h2 className="h1-section mt-2">Trusted across borders.</h2>
            <p className="lead mt-4">
              From construction sites in Maharashtra to OEM workshops in
              Nairobi and Dubai — MP Industries components keep mixers running.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-5xl mx-auto bg-white rounded-card border border-hairline p-4 sm:p-8">
            <WorldMap />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Pan-India", body: "Active dealers and OEM partners across India's largest construction equipment hubs.", icon: Factory },
              { title: "Africa", body: "Consistent shipments to construction machinery markets across the African continent.", icon: Globe2 },
              { title: "Middle East", body: "Exporting to mixer manufacturers and traders across the Gulf region.", icon: Wrench },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80} className="card-mp p-6">
                <c.icon size={26} color="#D05030" />
                <h3 className="mt-4 font-display font-bold text-2xl">{c.title}</h3>
                <p className="mt-2 text-[15px] text-graphite leading-relaxed">{c.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="bg-ink text-white" data-testid="cta-block">
        <div className="container-mp py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <ScrollReveal className="md:col-span-7">
            <div className="eyebrow">Talk to us</div>
            <h2 className="h1-section text-white mt-2">
              Have a part requirement? We'll respond — fast.
            </h2>
            <p className="mt-4 text-white/80 text-[16px] sm:text-[17px] max-w-xl">
              Whether it's a single replacement or a bulk OEM order, our team
              is on WhatsApp during business hours. Send us your spec — we'll
              come back with availability and pricing.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5 flex flex-col gap-3 sm:items-end">
            <a
              href={whatsappChatURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base text-white"
              style={{ backgroundColor: "#25D366" }}
              data-testid="cta-whatsapp-btn"
            >
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn-secondary !text-white !border-white/40 hover:!bg-white hover:!text-ink" data-testid="cta-contact-link">
              Visit Contact Page
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <InquiryModal
        open={!!inquiryProduct}
        product={inquiryProduct}
        onClose={() => setInquiryProduct(null)}
      />
    </>
  );
};

export default Home;
