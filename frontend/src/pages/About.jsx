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
    popover: "MP Industries founded in Ahmedabad. Started manufacturing precision parts for cement concrete mixer machines from a single workshop.",
    pill: "1st Generation",
  },
  {
    year: "2000",
    title: "Expansion",
    desc: "Expanded product range and grew the distribution network across Gujarat and neighbouring states.",
    popover: "Expanded the catalog to cover most mixer drive components and grew the dealer network across Gujarat and neighbouring Indian states.",
  },
  {
    year: "2017",
    title: "New Chapter",
    desc: "Acquired by current management. Renewed focus on quality and global reach.",
    popover: "Acquired by the current management. Renewed focus on quality, modernisation and expanding reach to pan-India and international markets.",
    pill: "2nd Generation",
  },
  {
    year: "2022",
    title: "Machinery Upgrade",
    desc: "Invested in advanced manufacturing equipment. Elevated precision and production capacity across all 69+ product lines.",
    popover: "Invested in advanced CNC and casting equipment. Lifted production capacity and tolerances across the full 69+ product catalog.",
  },
  {
    year: "2026",
    title: "New Generation",
    desc: "Third generation joins. Fresh vision, global direction — 35 years of legacy.",
    popover: "Third generation joins the business. Fresh vision, global direction — building on 35 years of manufacturing legacy.",
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
              <span style={{ color: "#C04028" }}>India's mixer machines.</span>
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
                    color: "#C04028",
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

      {/* ── Full-width workshop strip ──────────────────────────────── */}
      <ScrollReveal
        as="section"
        data-testid="about-workshop-strip"
        style={{
          position: "relative",
          width: "100%",
          minHeight: 260,
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%), url('/about-workshop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            [data-testid="about-workshop-strip"] { min-height: 440px !important; }
          }
        `}</style>
        <div className="container-mp" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div style={{ maxWidth: "50%" }} className="max-md:!max-w-full">
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
              AHMEDABAD, INDIA · EST. 1990
            </div>
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "clamp(24px, 3.2vw, 36px)",
                lineHeight: 1.15,
                letterSpacing: "-0.005em",
              }}
            >
              Three decades of precision.<br />
              One name you can trust.
            </h2>
            <div
              style={{ width: 48, height: 2, backgroundColor: "#C04028", margin: "20px 0" }}
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                maxWidth: 440,
                lineHeight: 1.65,
              }}
            >
              From a single workshop in Ahmedabad to a pan-India supply network and
              international export — MP Industries has been building the parts that
              keep India's construction moving.
            </p>
          </div>
        </div>
      </ScrollReveal>

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

      {/* ── Leadership / Director messages ──────────────────────────── */}
      <section className="bg-cream" data-testid="about-leadership">
        <div className="container-mp section">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow" style={{ display: "inline-flex" }}>Our Leadership</div>
            <h2 className="h1-section mt-3">The People Behind MP Industries</h2>
            <p className="lead mt-3">
              Three generations of manufacturing expertise, guided by a commitment to
              quality and long-term partnerships.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: "Hemant Patel",
                initials: "HP",
                title: "Managing Director",
                /* When real photo is provided, replace the initials circle with:
                   <img src="/images/hemant-patel.jpg" alt="Hemant Patel" />
                   styled as circle: border-radius:50%, width/height 96px,
                   border:3px solid #C04028, object-fit:cover */
                message:
                  "MP Industries was built on one simple belief — if a part carries our name, it has to be right. Over three decades, we have supplied components to hundreds of manufacturers across India and abroad, and that belief has never changed. What started as a small workshop in Ahmedabad has grown into a business that reaches Africa and the Middle East — but the commitment to precision and reliability remains the same as day one.",
              },
              {
                name: "Mitesh Patel",
                initials: "MP",
                title: "Director",
                /* When real photo is provided, replace the initials circle with:
                   <img src="/images/mitesh-patel.jpg" alt="Mitesh Patel" /> */
                message:
                  "I grew up around these machines and these parts. Taking over meant understanding not just the products, but the trust our customers place in us every time they place an order. My focus has been on modernising our operations, expanding our reach, and making MP Industries the first name that comes to mind when someone needs a concrete mixer part — anywhere in India or overseas.",
              },
            ].map((d, i) => (
              <ScrollReveal
                key={d.name}
                delay={i * 80}
                className="bg-white relative transition-shadow"
                style={{
                  border: "1px solid #E8E8E8",
                  borderRadius: 16,
                  padding: 36,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                data-testid={`director-card-${d.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Photo placeholder — initials circle */}
                <div className="flex flex-col items-center">
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      backgroundColor: "#F7F6F2",
                      border: "3px solid #C04028",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "#C04028",
                        lineHeight: 1,
                      }}
                    >
                      {d.initials}
                    </span>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 10,
                      color: "#3D3D3D",
                    }}
                  >
                    Photo coming soon
                  </div>
                </div>

                <h3
                  className="mt-4 text-center"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#1A1A1A",
                    lineHeight: 1.2,
                  }}
                >
                  {d.name}
                </h3>
                <div
                  className="text-center mt-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#C04028",
                  }}
                >
                  {d.title}
                </div>
                <div
                  className="text-center mt-0.5"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "#3D3D3D",
                  }}
                >
                  MP Industries
                </div>

                <div
                  style={{
                    height: 1,
                    backgroundColor: "#E8E8E8",
                    margin: "20px 0",
                  }}
                  aria-hidden="true"
                />

                <div style={{ position: "relative" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -20,
                      left: -6,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 64,
                      color: "#C04028",
                      opacity: 0.3,
                      lineHeight: 0,
                      pointerEvents: "none",
                    }}
                  >
                    “
                  </span>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#3D3D3D",
                      lineHeight: 1.8,
                      position: "relative",
                    }}
                  >
                    {d.message}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                  <Icon size={18} color="#C04028" />
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
                <Icon size={22} color="#C04028" className="mx-auto" />
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
