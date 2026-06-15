import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Factory, Users, Globe2, BadgeCheck } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Timeline from "../components/Timeline";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "69+", label: "Products" },
  { value: "Pan-India", label: "Supply Network" },
  { value: "3", label: "Continents Served" },
];

const milestones = [
  {
    year: "1990",
    title: "The Beginning",
    desc: "MP Industries founded in Ahmedabad. Precision parts for cement concrete mixer machines.",
    pill: "1st Generation",
  },
  {
    year: "2000",
    title: "Expansion",
    desc: "Expanded product range and grew the distribution network across Gujarat and neighbouring states.",
  },
  {
    year: "2017",
    title: "New Chapter",
    desc: "Acquired by current management. Renewed focus on quality and global reach.",
    pill: "2nd Generation",
  },
  {
    year: "2022",
    title: "Machinery Upgrade",
    desc: "Invested in advanced manufacturing equipment. Elevated precision and production capacity across all 69+ product lines.",
  },
  {
    year: "2026",
    title: "New Generation",
    desc: "Third generation joins. Fresh vision, global direction — 35 years of legacy.",
    pill: "3rd Generation",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About MP Industries | 20+ Years Manufacturing Mixer Parts in Ahmedabad"
        description="Established 2004. Acquired & relaunched 2017. MP Industries manufactures 69+ precision concrete mixer machine parts in Ahmedabad — trusted by OEMs and dealers across India, Africa and the Middle East."
        keywords="MP Industries Ahmedabad, mixer parts manufacturer history, concrete mixer parts company, registered mixer parts brand"
        path="/about"
      />

      <PageHeader
        image="/images/header-about.png"
        eyebrow="About MP Industries"
        title="20 Years of Precision."
        subtext="Trusted by manufacturers, dealers and contractors across India, Africa and the Middle East."
      />

      {/* ── Story split ─────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <ScrollReveal>
            <div className="eyebrow">Our Story</div>
            <h2 className="h1-section mt-3">
              Three decades of building<br />
              <span style={{ color: "#D05030" }}>India's mixer machines.</span>
            </h2>
            <div
              className="mt-5 space-y-3 max-w-[520px]"
              style={{ color: "#3D3D3D", fontSize: 15, lineHeight: 1.7 }}
            >
              <p>
                MP Industries was founded in 1990 in Ahmedabad and has been manufacturing
                precision parts for cement concrete mixer machines for over three decades.
                Our reputation rests on quality, reliability and consistency.
              </p>
              <p>
                In 2017, the business was acquired by the current management and relaunched
                with renewed focus on modernisation, pan-India reach and active export to
                Africa and the Middle East.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-mp p-5 text-center flex flex-col justify-center min-h-[110px]"
                data-testid={`about-stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: "#D05030",
                    fontSize: 28,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2"
                  style={{ fontFamily: "Inter", fontSize: 10, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.12em", color: "#3D3D3D" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <section className="bg-white-section">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="eyebrow" style={{ display: "inline-flex" }}>Our Journey</div>
            <h2 className="h1-section mt-3">Three Decades of Precision.</h2>
            <p className="lead mt-3">
              From a small Ahmedabad workshop to a multi-generation manufacturing legacy.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-16 md:mt-20">
            <Timeline items={milestones} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Make ────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section">
          <ScrollReveal>
            <div className="eyebrow">What We Make</div>
            <h2 className="h1-section mt-3">69+ precision-engineered components.</h2>
            <p className="lead mt-3 max-w-3xl">
              From drums and yokes to gears, bearings, clutch systems, shafts, and pulleys —
              covering virtually every mechanical need of a concrete mixer machine.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Drums & Yokes", "Gears & Rings", "Shafts", "Bearings",
              "Pedestals", "Pulleys", "Rollers", "Brakes & Clutch",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 40} className="card-mp p-4 text-center">
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: 16, color: "#1A1A1A" }}>
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ────────────────────────────────────────────── */}
      <section className="bg-white-section">
        <div className="container-mp section">
          <ScrollReveal>
            <div className="eyebrow">Who We Serve</div>
            <h2 className="h1-section mt-3">Manufacturers, OEMs, contractors & dealers.</h2>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Factory, title: "Mixer Manufacturers", body: "Direct supply of cast and machined components to cement mixer OEMs across India." },
              { icon: Users, title: "OEM Suppliers & Dealers", body: "Bulk supply partnerships with equipment dealers and parts distributors." },
              { icon: ShieldCheck, title: "Construction Contractors", body: "Replacement parts and consumables for active construction equipment fleets." },
              { icon: Globe2, title: "International Buyers", body: "Active export shipments to clients in Africa and the Middle East." },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 50} className="card-mp p-5 flex gap-3.5">
                <div className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Icon size={18} color="#D05030" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 18, color: "#1A1A1A" }}>{title}</h3>
                  <p className="mt-1" style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.6 }}>{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trust MP ────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="eyebrow" style={{ display: "inline-flex" }}>Why Trust MP</div>
            <h2 className="h1-section mt-3">Built on the basics that matter.</h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { icon: BadgeCheck, label: "Registered ® Trademark" },
              { icon: ShieldCheck, label: "20+ Years Experience" },
              { icon: Factory, label: "69+ Products" },
              { icon: Globe2, label: "Pan-India + Export" },
              { icon: Users, label: "Direct Manufacturer" },
            ].map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 50} className="card-mp p-4 text-center">
                <Icon size={22} color="#D05030" className="mx-auto" />
                <div className="mt-2" style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 13, color: "#1A1A1A", lineHeight: 1.4 }}>
                  {label}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary" data-testid="about-cta-contact">
              Start an inquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
