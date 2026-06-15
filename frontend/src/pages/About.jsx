import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Factory, Users, Globe2, BadgeCheck } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "69+", label: "Products" },
  { value: "Pan-India", label: "Supply Network" },
  { value: "3 Continents", label: "Export Footprint" },
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

      {/* ── Hero / split intro ──────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <div className="eyebrow">About MP Industries</div>
            <h1 className="h1-hero mt-6">
              20 Years of Precision.<br />
              <span style={{ color: "#D05030" }}>Trusted Across India.</span>
            </h1>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed max-w-[520px]" style={{ color: "#3D3D3D" }}>
              <p>
                MP Industries was established in 2004. With over 20 years of experience
                in manufacturing precision parts for cement concrete mixer machines, we
                have built a reputation for quality, reliability, and consistency.
              </p>
              <p>
                In 2017, the business was acquired and relaunched with renewed focus on
                quality standards and expanding our reach — first across India, and
                then to international markets in Africa and the Middle East.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-mp p-6 text-center flex flex-col justify-center min-h-[140px]"
                data-testid={`about-stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div
                  className="font-display font-bold leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#D05030",
                    fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-3 text-[11px] uppercase font-bold tracking-[0.12em]"
                  style={{ color: "#3D3D3D" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Make ────────────────────────────────────────────── */}
      <section className="bg-white-section">
        <div className="container-mp section">
          <ScrollReveal>
            <div className="eyebrow">What We Make</div>
            <h2 className="h1-section mt-3">69+ precision-engineered components.</h2>
            <p className="lead mt-4 max-w-3xl">
              From drums and yokes to gears, bearings, clutch systems, shafts, and pulleys —
              covering virtually every mechanical need of a concrete mixer machine.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Drums & Yokes", "Gears & Rings", "Shafts", "Bearings",
              "Pedestals", "Pulleys", "Rollers", "Brakes & Clutch",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 50} className="card-mp p-5 text-center bg-white">
                <div className="font-display font-semibold text-[18px]" style={{ color: "#1A1A1A" }}>{item}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section">
          <ScrollReveal>
            <div className="eyebrow">Who We Serve</div>
            <h2 className="h1-section mt-3">Manufacturers, OEMs, contractors & dealers.</h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: Factory, title: "Mixer Manufacturers", body: "Direct supply of cast and machined components to cement mixer OEMs across India." },
              { icon: Users, title: "OEM Suppliers & Dealers", body: "Bulk supply partnerships with equipment dealers and parts distributors." },
              { icon: ShieldCheck, title: "Construction Contractors", body: "Replacement parts and consumables for active construction equipment fleets." },
              { icon: Globe2, title: "International Buyers", body: "Active export shipments to clients in Africa and the Middle East." },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 60} className="card-mp p-6 flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FBF0ED" }}>
                  <Icon size={22} color="#D05030" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[20px]" style={{ color: "#1A1A1A" }}>{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: "#3D3D3D" }}>{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Reach ───────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] text-white">
        <div className="container-mp section grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5">
            <div className="eyebrow">Our Reach</div>
            <h2 className="h1-section text-white mt-3" style={{ color: "#fff" }}>Pan-India + Active Export.</h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-7 space-y-5 text-[16.5px] text-white/80 leading-relaxed">
            <p>Pan-India supply network covering every major construction equipment hub.</p>
            <p>Active export to African countries and the Middle East, with growing partnerships year over year.</p>
            <p>Registered brand (®) with 20+ years of market presence and a reputation for reliable lead times.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Trust MP ────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center" style={{ display: "inline-flex" }}>Why Trust MP</div>
            <h2 className="h1-section mt-3">Built on the basics that matter.</h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: BadgeCheck, label: "Registered ® Trademark" },
              { icon: ShieldCheck, label: "20+ Years Experience" },
              { icon: Factory, label: "69+ Products" },
              { icon: Globe2, label: "Pan-India + Export" },
              { icon: Users, label: "Direct Manufacturer" },
            ].map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 60} className="card-mp p-5 text-center">
                <Icon size={26} color="#D05030" className="mx-auto" />
                <div className="mt-3 text-[14px] font-semibold leading-snug" style={{ color: "#1A1A1A" }}>{label}</div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary" data-testid="about-cta-contact">
              Start an inquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
