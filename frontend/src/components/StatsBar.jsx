import React, { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ to = 100, duration = 1500, suffix = "", start = false }) => {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setValue(to); return; }
    let raf;
    const startTs = performance.now();
    const tick = (now) => {
      const elapsed = now - startTs;
      const t = Math.min(1, elapsed / duration);
      setValue(Math.round(to * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const stats = [
  { id: "years", label: "Years of Experience", value: 20, suffix: "+" },
  { id: "products", label: "Products", value: 69, suffix: "+" },
  { id: "india", label: "Pan-India Supply", text: "Pan-India" },
  { id: "export", label: "Global Export", text: "Global" },
];

export const StatsBar = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="text-white"
      style={{ backgroundColor: "#D05030" }}
      aria-label="Company stats"
      data-testid="stats-bar"
    >
      <div className="container-mp" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-4 md:gap-x-6 stats-pad">
          {stats.map((s, i) => (
            <div
              key={s.id}
              className={`${i !== 0 ? "lg:border-l lg:border-white/25 lg:pl-6" : ""}`}
              data-testid={`stat-${s.id}`}
            >
              <div
                className="leading-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4.2vw, 42px)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {typeof s.value === "number" ? (
                  <CountUp to={s.value} suffix={s.suffix} start={inView} />
                ) : (
                  s.text
                )}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          [data-testid="stats-bar"] > div { padding-top: 40px !important; padding-bottom: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default StatsBar;
