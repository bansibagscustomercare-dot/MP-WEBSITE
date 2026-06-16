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
  { icon: Factory, title: "Direct Manufacturer", body: "No middleman. Parts sourced direct from our Ahmedabad facility at manufacturer pricing." },
  { icon: Truck, title: "Pan-India Supply", body: "Reliable delivery to mixer manufacturers, dealers and contractors across every Indian state." },
  { icon: Globe2, title: "Export Ready", body: "Active export to Africa and the Middle East. Trusted by international procurement teams." },
  { icon: Calendar, title: "20+ Years Experience", body: "Founded in 2004. Two decades of precision manufacturing behind every part we make." },
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
        contactPoint: [{
          "@type": "ContactPoint",
          telephone: SITE.phonePrimary,
          contactType: "sales",
          areaServed: ["IN", "Africa", "Middle East"],
          availableLanguage: ["en", "hi", "gu"],
        }],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.domain}/#localbusiness`,
        name: "MP Industries",
        image: `${SITE.domain}/favicon.svg`,
        telephone: SITE.phonePrimary,
        priceRange: "$$",
        address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
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

      {/* ── HERO MOBILE (< md) — stacked layout ────────────────────── */}
      <section className="md:hidden" data-testid="hero-section-mobile">
        <div className="relative" style={{ height: 280, width: "100%" }}>
          <img
            src="/images/hero.png"
            alt="MP Industries concrete mixer machine parts"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center right",
              display: "block",
            }}
          />
          {/* bottom fade into text section */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: 80,
              background:
                "linear-gradient(to bottom, transparent 0%, #F7F6F2 100%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div style={{ backgroundColor: "#F7F6F2", padding: "32px 20px 40px" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#C04028",
            }}
          >
            AHMEDABAD'S CONCRETE MIXER PARTS EXPERTS
          </div>
          <h1
            className="mt-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 30,
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              color: "#1A1A1A",
            }}
          >
            Built for the machines
            <br />
            <span style={{ color: "#C04028" }}>that build India.</span>
          </h1>
          <p
            className="mt-3"
            style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }}
          >
            MP Industries is Ahmedabad's trusted manufacturer of precision concrete
            mixer machine parts — serving manufacturers, dealers and contractors
            across India, Africa and the Middle East for over 20 years.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link to="/products" className="btn-primary w-full" data-testid="hero-cta-products-mobile">
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline-brand w-full" data-testid="hero-cta-contact-mobile">
              Contact Us
            </Link>
          </div>

          <div
            className="mt-5 grid grid-cols-2"
            style={{ gap: "10px 16px", color: "#3D3D3D", fontSize: 12 }}
            data-testid="hero-trust-row-mobile"
          >
            {["20+ Years Experience", "Pan-India Supply", "Direct Manufacturer", "Global Export"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <span style={{ color: "#C04028", fontWeight: 700 }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO DESKTOP (≥ md) — full-width image background ──────── */}
      <section
        className="relative hidden md:block"
        data-testid="hero-section"
        style={{
          minHeight: "100vh",
          backgroundImage: "url(/images/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F7F6F2",
        }}
      >
        {/* Left-side gradient overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(247,246,242,0.92) 0%, rgba(247,246,242,0.85) 35%, rgba(247,246,242,0.1) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="container-mp relative grid grid-cols-1 lg:grid-cols-12 items-center"
          style={{ minHeight: "100vh", paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="eyebrow" data-testid="hero-eyebrow">AHMEDABAD'S CONCRETE MIXER PARTS EXPERTS</div>
            <h1 className="h1-hero mt-5" data-testid="hero-headline">
              Built for the machines<br />
              <span style={{ color: "#C04028" }}>that build India.</span>
            </h1>
            <p
              className="mt-4 max-w-[480px]"
              style={{ color: "#3D3D3D", fontSize: 15, lineHeight: 1.7 }}
            >
              MP Industries is Ahmedabad's trusted manufacturer of precision concrete
              mixer machine parts — serving manufacturers, dealers and contractors
              across India, Africa and the Middle East for over 20 years.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary" data-testid="hero-cta-products">
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-brand" data-testid="hero-cta-contact">
                Contact Us
              </Link>
            </div>

            <div
              className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5"
              style={{ color: "#3D3D3D", fontSize: 13 }}
              data-testid="hero-trust-row"
            >
              {["20+ Years Experience", "Pan-India Supply", "Direct Manufacturer", "Global Export"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span style={{ color: "#3D3D3D", fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── CATALOG TEASER ───────────────────────────────────────────── */}
      <section className="bg-white-section" data-testid="catalog-teaser">
        <div className="container-mp section">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <div className="eyebrow">The Catalog</div>
              <h2 className="h1-section mt-3">Every component a mixer needs — under one roof.</h2>
              <p className="lead mt-3">
                Drums, gears, bearings, pulleys, clutch systems and brake assemblies.
                Sixty-nine precision-engineered parts ready to ship across India and overseas.
              </p>
            </div>
            <Link to="/products" className="btn-secondary self-start md:self-end" data-testid="teaser-view-all-btn">
              View Full Catalog
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCategories.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 60}>
                <CategoryCard {...c} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP STRIP ──────────────────────────────────────────── */}
      <ScrollReveal
        as="section"
        data-testid="workshop-strip"
        style={{
          position: "relative",
          width: "100%",
          minHeight: 280,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('/workshop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px",
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            [data-testid="workshop-strip"] { min-height: 420px !important; }
          }
        `}</style>
        <div className="text-center max-w-2xl">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            AHMEDABAD, INDIA · SINCE 1990
          </div>
          <h2
            className="mt-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: "#ffffff",
              fontSize: "clamp(26px, 3.4vw, 38px)",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
            }}
          >
            Precision engineered. Built to last.
          </h2>
          <div
            style={{
              width: 48,
              height: 2,
              backgroundColor: "#C04028",
              margin: "20px auto",
            }}
            aria-hidden="true"
          />
          <p
            className="mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Delivered to manufacturers, dealers and contractors across India, Africa and the Middle East.
          </p>
        </div>
      </ScrollReveal>

      {/* ── WHY MP ───────────────────────────────────────────────────── */}
      <section className="bg-cream" data-testid="why-mp-section">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal className="flex">
            <div
              className="w-full p-8 flex flex-col justify-center"
              style={{ backgroundColor: "#C04028", borderRadius: 12 }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: 1.15,
                }}
              >
                <div style={{ color: "#FFFFFF" }}>Precision Parts.</div>
                <div style={{ color: "#E8A020" }}>Trusted Across India.</div>
              </div>
              <p
                className="mt-4"
                style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, lineHeight: 1.65 }}
              >
                Every component we manufacture meets strict quality standards. We don't
                just supply parts — we support your entire operation.
              </p>
              <div
                className="mt-5 flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: 12 }}
              >
                <ShieldCheck size={16} color="#E8A020" />
                <span>Registered ® · 20+ Years · Direct Manufacturer</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {whyMP.map((row, i) => (
              <ScrollReveal
                key={row.title}
                delay={i * 60}
                className="border-l-[3px] pl-4 mb-6 last:mb-0"
                style={{ borderColor: "#C04028" }}
              >
                <div className="flex items-center gap-2.5">
                  <row.icon size={16} color="#C04028" />
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18, color: "#1A1A1A" }}>
                    {row.title}
                  </h3>
                </div>
                <p className="mt-1.5" style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }}>
                  {row.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLD MAP ────────────────────────────────────────────────── */}
      <section className="bg-cream" data-testid="world-map-section">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8">
            <div className="eyebrow" style={{ display: "inline-flex" }}>Our Reach</div>
            <h2 className="h1-section mt-3">Trusted Across Borders.</h2>
            <p className="lead mt-3">
              From construction sites in Maharashtra to OEM workshops in Nairobi and
              Dubai — MP Industries components keep mixers running.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-5xl mx-auto">
            <WorldMap />
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Pan-India", body: "Active dealers and OEM partners across India's largest construction equipment hubs.", icon: Factory },
              { title: "Africa", body: "Consistent shipments to construction machinery markets across the African continent.", icon: Globe2 },
              { title: "Middle East", body: "Exporting to mixer manufacturers and traders across the Gulf region.", icon: Wrench },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 70} className="card-mp p-6">
                <c.icon size={22} color="#C04028" />
                <h3 className="mt-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 22, color: "#1A1A1A" }}>{c.title}</h3>
                <p className="mt-1.5" style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }}>{c.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="bg-white-section" data-testid="cta-block">
        <div className="container-mp section grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <ScrollReveal className="md:col-span-7">
            <div className="eyebrow">Talk to us</div>
            <h2 className="h1-section mt-3">Have a part requirement? We'll respond — fast.</h2>
            <p className="lead mt-3 max-w-xl">
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#25D366", color: "#fff", fontSize: 14, fontFamily: "Inter" }}
              data-testid="cta-whatsapp-btn"
            >
              Chat on WhatsApp
              <ArrowRight size={16} />
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
