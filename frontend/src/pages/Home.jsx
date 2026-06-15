import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, CircleDot, Wrench, Disc, Factory, Globe2, ShieldCheck, Truck, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import StatsBar from "../components/StatsBar";
import WorldMap from "../components/WorldMap";
import ScrollReveal from "../components/ScrollReveal";
import CategoryCard from "../components/CategoryCard";
import InquiryModal from "../components/InquiryModal";
import { SITE, whatsappChatURL } from "../data/site";

const featuredCategories = [
  {
    icon: Disc,
    title: "Drums & Yokes",
    description: "Heavy-duty cast drums, yokes and wire-drum assemblies for every mixer class.",
    tags: ["Drum & Yoke", "Wire Drum", "Tower Hoist"],
    to: "/products",
  },
  {
    icon: Cog,
    title: "Gears & Rings",
    description: "Bevel, ring and pinion gears precision-cut for OEM-grade mixer drive systems.",
    tags: ["Bevel Gear", "Millar Ring", "Bush Gear"],
    to: "/products",
  },
  {
    icon: CircleDot,
    title: "Bearings & Pedestals",
    description: "Plain and helix bearings paired with cast pedestals for any shaft configuration.",
    tags: ["Helix Bearing", "GM Drum Bush", "Yoke Pedestal"],
    to: "/products",
  },
  {
    icon: Wrench,
    title: "Pulleys & Rollers",
    description: "2B pulleys, cable rollers and fiber rollers for cranes, hoists and conveyors.",
    tags: ["20\" 2B Pulley", "Cable Pulley", "Fiber Roller"],
    to: "/products",
  },
];

const whyMP = [
  {
    icon: Factory,
    title: "Direct Manufacturer",
    body: "No middleman. Parts sourced direct from our Ahmedabad facility at manufacturer pricing.",
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
    body: "Reliable delivery to mixer manufacturers, dealers and contractors across every Indian state.",
  },
  {
    icon: Globe2,
    title: "Export Ready",
    body: "Active export to Africa and the Middle East. Trusted by international procurement teams.",
  },
  {
    icon: Calendar,
    title: "20+ Years Experience",
    body: "Founded in 2004. Two decades of precision manufacturing behind every part we make.",
  },
];

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

      {/* ── HERO — split editorial ──────────────────────────────────── */}
      <section className="bg-cream" data-testid="hero-section">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="eyebrow" data-testid="hero-eyebrow">AHMEDABAD'S CONCRETE MIXER PARTS EXPERTS</div>
            <h1 className="h1-hero mt-6" data-testid="hero-headline">
              Built for the machines<br />
              <span style={{ color: "#D05030" }}>that build India.</span>
            </h1>
            <p
              className="mt-5 text-[16px] sm:text-[17px] leading-relaxed max-w-[480px]"
              style={{ color: "#3D3D3D" }}
            >
              MP Industries is Ahmedabad's trusted manufacturer of precision concrete
              mixer machine parts — serving manufacturers, dealers and contractors
              across India, Africa and the Middle East for over 20 years.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#D05030" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#B8402A")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D05030")}
                data-testid="hero-cta-products"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-[15px] transition-all hover:-translate-y-0.5"
                style={{
                  border: "2px solid #D05030",
                  color: "#D05030",
                  backgroundColor: "transparent",
                }}
                data-testid="hero-cta-contact"
              >
                Contact Us
              </Link>
            </div>

            <div
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px]"
              style={{ color: "#3D3D3D" }}
              data-testid="hero-trust-row"
            >
              {["20+ Years Experience", "Pan-India Supply", "Direct Manufacturer", "Global Export"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span style={{ color: "#D05030", fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative" data-testid="hero-image">
            <div
              className="w-full overflow-hidden flex items-center justify-center relative"
              style={{
                aspectRatio: "4 / 3",
                backgroundColor: "#E8E8E8",
                borderRadius: "12px",
              }}
            >
              <div className="flex flex-col items-center gap-3" style={{ opacity: 0.25 }}>
                <svg width="120" height="86" viewBox="0 0 64 46" aria-hidden="true">
                  <ellipse cx="32" cy="23" rx="30" ry="21" fill="#D05030" />
                  <text x="32" y="30" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontWeight="800" fontSize="22" fill="#FFFFFF">MP</text>
                </svg>
                <div
                  className="font-display font-bold text-[20px]"
                  style={{ color: "#1A1A1A" }}
                >
                  MP Industries
                </div>
              </div>
              <div
                className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "#3D3D3D", opacity: 0.5 }}
              >
                Image coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── CATALOG TEASER — category cards ──────────────────────────── */}
      <section className="bg-white-section" data-testid="catalog-teaser">
        <div className="container-mp section">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow">The Catalog</div>
              <h2 className="h1-section mt-3">
                Every component a mixer needs — under one roof.
              </h2>
              <p className="lead mt-4">
                Drums, gears, bearings, pulleys, clutch systems and brake assemblies.
                Sixty-nine precision-engineered parts ready to ship across India and overseas.
              </p>
            </div>
            <Link to="/products" className="btn-secondary self-start md:self-end" data-testid="teaser-view-all-btn">
              View Full Catalog
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCategories.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 70}>
                <CategoryCard {...c} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MP — Trust section (Accuplus style) ──────────────────── */}
      <section className="bg-cream" data-testid="why-mp-section">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <ScrollReveal className="flex">
            <div
              className="w-full p-10 flex flex-col justify-center"
              style={{
                backgroundColor: "#D05030",
                borderRadius: "12px",
              }}
            >
              <div className="font-display font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.85rem, 3vw, 2.25rem)" }}>
                <div style={{ color: "#FFFFFF" }}>Precision Parts.</div>
                <div style={{ color: "#E8A020" }}>Trusted Across India.</div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                Every component we manufacture meets strict quality standards. We don't
                just supply parts — we support your entire operation.
              </p>
              <div className="mt-7 flex items-center gap-3 text-white/85 text-[13px]">
                <ShieldCheck size={18} className="text-[#E8A020]" />
                <span>Registered ® · 20+ Years · Direct Manufacturer</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {whyMP.map((row, i) => (
              <ScrollReveal
                key={row.title}
                delay={i * 70}
                className="border-l-[4px] pl-5 mb-7 last:mb-0"
                style={{ borderColor: "#D05030" }}
              >
                <div className="flex items-center gap-3">
                  <row.icon size={18} color="#D05030" />
                  <h3 className="font-sans font-semibold text-[18px]" style={{ color: "#1A1A1A" }}>
                    {row.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: "#3D3D3D" }}>
                  {row.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLD MAP / REACH ────────────────────────────────────────── */}
      <section className="bg-white-section" data-testid="world-map-section">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow justify-center" style={{ display: "inline-flex" }}>Our Reach</div>
            <h2 className="h1-section mt-3">Trusted Across Borders.</h2>
            <p className="lead mt-4">
              From construction sites in Maharashtra to OEM workshops in Nairobi and
              Dubai — MP Industries components keep mixers running.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-5xl mx-auto bg-white rounded-card border p-4 sm:p-8" style={{ borderColor: "#E8E8E8" }}>
            <WorldMap />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Pan-India", body: "Active dealers and OEM partners across India's largest construction equipment hubs.", icon: Factory },
              { title: "Africa", body: "Consistent shipments to construction machinery markets across the African continent.", icon: Globe2 },
              { title: "Middle East", body: "Exporting to mixer manufacturers and traders across the Gulf region.", icon: Wrench },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80} className="card-mp p-6">
                <c.icon size={24} color="#D05030" />
                <h3 className="mt-4 font-display font-semibold text-[22px]" style={{ color: "#1A1A1A" }}>{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: "#3D3D3D" }}>{c.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="bg-cream" data-testid="cta-block">
        <div className="container-mp section grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <ScrollReveal className="md:col-span-7">
            <div className="eyebrow">Talk to us</div>
            <h2 className="h1-section mt-3">
              Have a part requirement? We'll respond — fast.
            </h2>
            <p className="lead mt-4 max-w-xl">
              Whether it's a single replacement or a bulk OEM order, our team is on
              WhatsApp during business hours. Send us your spec — we'll come back
              with availability and pricing.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5 flex flex-col gap-3 sm:items-end">
            <a
              href={whatsappChatURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#25D366" }}
              data-testid="cta-whatsapp-btn"
            >
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn-secondary" data-testid="cta-contact-link">
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
