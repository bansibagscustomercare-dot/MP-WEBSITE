import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "../data/heroSlides";

const STRIP = 110; // px width of a collapsed slice (desktop)

const pad = (n) => String(n + 1).padStart(2, "0");

const Arrow = () => <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />;

/**
 * Accordion hero: one open slice (~65%), the rest collapsed to strips with
 * rotated titles. Click / Enter / Arrow keys to change. Mobile = vertical accordion.
 */
export const HeroAccordion = ({ slides = heroSlides }) => {
  const [active, setActive] = useState(0);
  const n = slides.length;

  const onKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % n); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + n) % n); }
    },
    [n]
  );

  const cols = slides.map((_, i) => (i === active ? "1fr" : `${STRIP}px`)).join(" ");
  const rows = slides.map((_, i) => (i === active ? "1fr" : "60px")).join(" ");

  return (
    <section aria-label="Featured products" data-testid="hero-accordion" onKeyDown={onKey}>
      {/* Desktop */}
      <div className="hx" style={{ gridTemplateColumns: cols }} role="tablist" aria-orientation="horizontal">
        {slides.map((s, i) => {
          const open = i === active;
          return (
            <div
              key={s.id}
              role="tab"
              aria-selected={open}
              tabIndex={open ? 0 : 0}
              className={`hx-slice ${open ? "is-open" : ""} ${s.tone === "light" ? "tone-light" : ""}`}
              onClick={() => !open && setActive(i)}
              onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !open) { e.preventDefault(); setActive(i); } }}
              data-testid={`hero-slice-${s.id}`}
              aria-label={`${pad(i)} ${s.title}`}
            >
              {s.image ? <img className="hx-img" src={s.image} alt="" loading={i === 0 ? "eager" : "lazy"} style={{ objectPosition: open ? "55% 50%" : `${s.focus ?? 50}% 50%` }} /> : <div className="hx-img-ph" />}
              <div className="hx-shade" />
              <div className="hx-index">{pad(i)}</div>
              <div className="hx-vtitle" aria-hidden="true"><span>{s.title}</span></div>
              <div className="hx-body">
                {s.kicker ? <div className="hx-kicker">{s.kicker}</div> : null}
                <h2 className="hx-title">{s.headline}</h2>
                <Link to={s.to} className="hx-cta" tabIndex={open ? 0 : -1}>
                  {s.cta} <Arrow />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="hxm" style={{ gridTemplateRows: rows, height: 60 * (n - 1) + 360 }}>
        {slides.map((s, i) => {
          const open = i === active;
          return (
            <div key={s.id} className={`hxm-slice ${open ? "is-open" : ""} ${s.tone === "light" ? "tone-light" : ""}`}>
              {s.image ? <img className="hx-img" src={s.image} alt="" loading={i === 0 ? "eager" : "lazy"} style={{ objectPosition: open ? "85% 50%" : "70% 50%" }} /> : <div className="hx-img-ph" />}
              <div className="hx-shade" style={{ background: open ? (s.tone === "light" ? "linear-gradient(to top, rgba(255,255,255,.9) 0%, rgba(255,255,255,.55) 35%, rgba(255,255,255,0) 65%)" : "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.1))") : "rgba(0,0,0,.5)" }} />
              <button className="hxm-bar" onClick={() => setActive(i)} aria-expanded={open}>
                <b>{pad(i)}</b>
                {!open && <span>{s.title}</span>}
              </button>
              <div className="hxm-body">
                {s.kicker ? <div className="hx-kicker">{s.kicker}</div> : null}
                <h2 className="hx-title">{s.headline}</h2>
                <Link to={s.to} className="hx-cta" tabIndex={open ? 0 : -1}>{s.cta} <Arrow /></Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroAccordion;
