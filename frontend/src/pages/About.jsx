import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Factory, Users, Globe2, BadgeCheck } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";

const About = () => {
  return (
    <>
      <SEO
        title="About MP Industries | 20+ Years Manufacturing Mixer Parts in Ahmedabad"
        description="Established 2004. Acquired & relaunched 2017. MP Industries manufactures 69+ precision concrete mixer machine parts in Ahmedabad — trusted by OEMs and dealers across India, Africa and the Middle East."
        keywords="MP Industries Ahmedabad, mixer parts manufacturer history, concrete mixer parts company, registered mixer parts brand"
        path="/about"
      />

      {/* ── Page header ─────────────────────────────────────────────── */}
      <header className="bg-white border-b border-hairline">
        <div className="container-mp pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="eyebrow">About</div>
          <h1 className="h1-section mt-2">Two decades of building the parts that build India.</h1>
          <p className="lead mt-4 max-w-3xl">
            MP Industries is a registered manufacturer of concrete mixer machine components — founded in 2004,
            relaunched in 2017, and trusted by mixer manufacturers, OEM suppliers, contractors and dealers across three continents.
          </p>
        </div>
      </header>

      {/* ── Our Story ───────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-mp py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5">
            <div className="eyebrow">Our Story</div>
            <h2 className="h2-section mt-2">Established 2004. Relaunched 2017.</h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-7 space-y-5 text-[16.5px] text-graphite leading-relaxed">
            <p>
              MP Industries was established in 2004. With over 20 years of experience in manufacturing
              precision parts for cement concrete mixer machines, we have built a reputation for
              quality, reliability, and consistency.
            </p>
            <p>
              In 2017, the business was acquired and relaunched with renewed focus on quality standards
              and expanding our reach — first across India, and then to international markets in Africa and the Middle East.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Make ────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container-mp py-16 md:py-20">
          <ScrollReveal>
            <div className="eyebrow">What We Make</div>
            <h2 className="h2-section mt-2">69+ precision-engineered components.</h2>
            <p className="lead mt-4 max-w-3xl">
              From drums and yokes to gears, bearings, clutch systems, shafts, and pulleys —
              covering virtually every mechanical need of a concrete mixer machine.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Drums & Yokes",
              "Gears & Rings",
              "Shafts",
              "Bearings",
              "Pedestals",
              "Pulleys",
              "Rollers",
              "Brakes & Clutch",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 50} className="card-mp p-5 text-center bg-white">
                <div className="font-display font-bold text-lg text-ink">{item}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-mp py-16 md:py-20">
          <ScrollReveal>
            <div className="eyebrow">Who We Serve</div>
            <h2 className="h2-section mt-2">Manufacturers, OEMs, contractors & dealers.</h2>
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
                  <h3 className="font-display font-bold text-xl text-ink">{title}</h3>
                  <p className="mt-1.5 text-[15px] text-graphite leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Reach ───────────────────────────────────────────────── */}
      <section className="bg-ink text-white">
        <div className="container-mp py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5">
            <div className="eyebrow">Our Reach</div>
            <h2 className="h2-section text-white mt-2">Pan-India + Active Export.</h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-7 space-y-5 text-[16.5px] text-white/80 leading-relaxed">
            <p>Pan-India supply network covering every major construction equipment hub.</p>
            <p>Active export to African countries and the Middle East, with growing partnerships year over year.</p>
            <p>Registered brand (®) with 20+ years of market presence and a reputation for reliable lead times.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Trust MP ────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-mp py-16 md:py-20">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Why Trust MP</div>
            <h2 className="h2-section mt-2">Built on the basics that matter.</h2>
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
                <div className="mt-3 text-[14px] font-semibold text-ink leading-snug">{label}</div>
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
