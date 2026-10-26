import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Disc, Cog, Ruler, Settings, CircleDot, Box, Circle, Cylinder,
  OctagonX, Link2, Wrench, Hammer, Layers, Grid2x2,
} from "lucide-react";
import SEO from "../components/SEO";
import HeroAccordion from "../components/HeroAccordion";
import WorldMap from "../components/WorldMap";
import ScrollReveal from "../components/ScrollReveal";
import { SITE, whatsappChatURL } from "../data/site";
import { categories } from "../data/products";

const categoryIcons = {
  drums: Disc, gears: Cog, shafts: Ruler, clutch: Settings, bearings: CircleDot,
  pedestals: Box, pulleys: Circle, rollers: Cylinder, brakes: OctagonX,
  "chain-wheels": Link2, brackets: Wrench, moulds: Hammer, misc: Layers,
};

const highlights = [
  { title: "Direct manufacturer — no middleman", image: "/about-workshop.jpg", to: "/about" },
  { title: "Pan-India supply to dealers and OEMs", image: "/workshop.jpg", to: "/products" },
  { title: "Export ready — Africa and the Middle East", image: "/images/header-products.png", to: "/contact" },
];

const facts = [
  { value: String(SITE.founded), label: "Founded in Ahmedabad" },
  { value: SITE.yearsExperience, label: "Years of manufacturing" },
  { value: SITE.productCount, label: "Precision cast parts" },
  { value: "3", label: "Regions: India, Africa, Middle East" },
];

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "MP Industries",
        url: SITE.domain,
        logo: `${SITE.domain}/logo.png`,
        foundingDate: String(SITE.founded),
        slogan: SITE.tagline,
        sameAs: [],
        contactPoint: [{
          "@type": "ContactPoint",
          telephone: SITE.phonePrimary,
          email: SITE.email,
          contactType: "sales",
          areaServed: ["IN", "Africa", "Middle East"],
          availableLanguage: ["en", "hi", "gu"],
        }],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.domain}/#localbusiness`,
        name: "MP Industries",
        image: `${SITE.domain}/logo.png`,
        telephone: SITE.phonePrimary,
        email: SITE.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9D, E Subhash Industrial Estate, Near Sindhwai Mata Mandir, CTM Ramol Road",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380026",
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
        description="MP Industries — manufacturing 69+ precision concrete mixer machine parts since 1990. Pan-India supply. Export to Africa & Middle East. Built for the machines that build India."
        keywords="concrete mixer parts, cement mixer machine parts, drum & yoke manufacturer, bevel gear, mixer ring gear, mixer pulley, Ahmedabad mixer parts, mixer machine spare parts India, OEM mixer parts, mixer parts export Africa, Middle East mixer supplier"
        path="/"
        jsonLd={jsonLd}
      />

      <HeroAccordion />

      {/* Intro */}
      <section className="section" data-testid="home-intro">
        <div className="container-mp">
          <ScrollReveal>
            <h1 className="h1-hero max-w-3xl" data-testid="home-h1">The MP Industries range</h1>
            <p className="lead mt-6 max-w-3xl">
              For more than three decades, MP Industries has manufactured precision cast iron parts for cement concrete
              mixer machines in Ahmedabad — supplied to manufacturers, dealers and contractors across India, Africa and the
              Middle East. {SITE.tagline}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary" data-testid="hero-cta-products">Explore products <ArrowRight size={18} strokeWidth={2.5} /></Link>
              <Link to="/contact" className="btn-secondary" data-testid="hero-cta-contact">Contact us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product programme */}
      <section className="pb-14 md:pb-20" data-testid="home-programme">
        <div className="container-mp">
          <h2 className="h2-section mb-6">Our product programme</h2>
          <div className="tile-grid">
            {categories.filter((c) => c.id !== "all").map((c) => {
              const Icon = categoryIcons[c.id] || Layers;
              return (
                <Link key={c.id} to={`/products?category=${c.id}`} className="tile" data-testid={`tile-${c.id}`}>
                  <Icon size={44} strokeWidth={1.25} aria-hidden="true" />
                  <span>{c.label}</span>
                </Link>
              );
            })}
            <Link to="/products" className="tile" data-testid="tile-all">
              <Grid2x2 size={44} strokeWidth={1.25} aria-hidden="true" />
              <span>All products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-14 md:pb-20" data-testid="home-highlights">
        <div className="container-mp">
          <h2 className="h2-section mb-6">Why buyers choose MP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 80}>
                <Link to={h.to} className="group block">
                  <div className="hl-frame">
                    <img src={h.image} alt="" loading="lazy" className="hl-img" />
                  </div>
                  <div className="mt-3 caption-link">
                    <span className="cl-text">{h.title}</span>
                    <ArrowRight size={16} strokeWidth={2.5} className="shrink-0 mt-0.5" aria-hidden="true" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="pb-14 md:pb-20" data-testid="home-facts">
        <div className="container-mp">
          <h2 className="h2-section mb-6">MP Industries in numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-hairline">
            {facts.map((f) => (
              <div key={f.label} className="p-6 md:p-8 border-r border-b border-hairline">
                <div className="font-display font-extrabold text-[52px] md:text-[64px] leading-none text-black">{f.value}</div>
                <div className="mt-3 text-[14px] font-bold uppercase tracking-[0.06em] text-[#3A3F45]">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="pb-14 md:pb-20" data-testid="home-reach">
        <div className="container-mp">
          <h2 className="h2-section">Trusted across borders</h2>
          <p className="lead mt-4 max-w-3xl">
            From construction sites in Maharashtra to OEM workshops in Nairobi and Dubai — MP Industries components keep mixers running.
          </p>
          <div className="mt-8">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F5F7] border-y border-hairline" data-testid="home-cta">
        <div className="container-mp py-14 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="h1-section">Have a part requirement?</h2>
            <p className="mt-4 text-[18px] text-[#3A3F45]">
              Whether it's a single replacement or a bulk OEM order, send us your spec on WhatsApp — we'll come back with availability and pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={whatsappChatURL()} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="cta-whatsapp-btn">
              Chat on WhatsApp <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <Link to="/contact" className="btn-secondary">Contact page</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
