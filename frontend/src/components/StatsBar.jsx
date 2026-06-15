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
  { id: "india", label: "Pan-India Supply", text: "All 28 States" },
  { id: "export", label: "Global Export", text: "Africa & Middle East" },
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
      style={{ backgroundColor: "#D05030", padding: "64px 0" }}
      aria-label="Company stats"
      data-testid="stats-bar"
    >
      <div className="container-mp">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((s, i) => (
            <div
              key={s.id}
              className={`${i !== 0 ? "lg:border-l lg:border-white/25 lg:pl-8" : ""}`}
              data-testid={`stat-${s.id}`}
            >
              <div
                className="font-display font-bold leading-none tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {typeof s.value === "number" ? (
                  <CountUp to={s.value} suffix={s.suffix} start={inView} />
                ) : (
                  s.text
                )}
              </div>
              <div
                className="mt-3 text-[11px] uppercase font-bold tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
