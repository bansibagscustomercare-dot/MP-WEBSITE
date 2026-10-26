import React, { useEffect, useRef, useState } from "react";

/**
 * Timeline — interactive horizontal (desktop) / vertical (mobile)
 * - Scroll-triggered line draw (0 → 100%) over 1.5s
 * - Staggered dot pop-in (scale 0 → 1.1 → 1)
 * - Hover: enlarges active milestone, dims others
 * - Click: opens popover with longer description
 * - Respects prefers-reduced-motion
 *
 * Item shape:
 *   { year, title, desc, pill?, popover? }
 */
const ROW_HEIGHT = 380;
const LINE_OFFSET = ROW_HEIGHT / 2;
const DOT_DELAYS = [0.2, 0.5, 0.9, 1.2, 1.5];

export const Timeline = ({ items = [] }) => {
  const wrapperRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [popover, setPopover] = useState(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Close popover on outside click
  useEffect(() => {
    if (!popover) return;
    const handler = (e) => {
      const t = e.target;
      if (!t.closest?.("[data-tl-popover]") && !t.closest?.("[data-tl-dot]")) {
        setPopover(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popover]);

  const animOn = inView && !reduced;
  const dotOf = (i) => DOT_DELAYS[i] ?? 0.2 + i * 0.3;

  return (
    <div ref={wrapperRef} className="relative" data-testid="timeline">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative" style={{ height: ROW_HEIGHT }}>
          {/* Baseline (draws on scroll) */}
          <div
            className="absolute left-0"
            style={{
              top: LINE_OFFSET,
              height: 2,
              backgroundColor: "#C04028",
              width: animOn || reduced ? "100%" : "0%",
              transition: reduced ? "none" : "width 1.5s ease-in-out",
              transformOrigin: "left center",
            }}
            aria-hidden="true"
          />
          <ul
            className="relative grid h-full"
            style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
          >
            {items.map((it, i) => {
              const above = i % 2 === 0;
              const isHover = hovered === i;
              const isOther = hovered !== null && hovered !== i;
              const dotDelay = dotOf(i);
              return (
                <li
                  key={it.year}
                  className="relative h-full"
                  data-testid={`timeline-item-${it.year}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    opacity: isOther ? 0.45 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  {/* Dot */}
                  <button
                    type="button"
                    data-tl-dot
                    onClick={(e) => {
                      e.stopPropagation();
                      setPopover((p) => (p === i ? null : i));
                    }}
                    aria-label={`${it.year} ${it.title}`}
                    data-testid={`timeline-dot-${it.year}`}
                    className="absolute left-1/2"
                    style={{
                      top: LINE_OFFSET,
                      width: 16,
                      height: 16,
                      padding: 0,
                      border: "none",
                      borderRadius: 9999,
                      backgroundColor: "#C04028",
                      boxShadow: "0 0 0 4px #ffffff",
                      transform: `translate(-50%, -50%) scale(${animOn || reduced ? (isHover ? 1.2 : 1) : 0})`,
                      transformOrigin: "center",
                      transition: reduced
                        ? "none"
                        : `transform 0.4s cubic-bezier(.34,1.56,.64,1) ${dotDelay}s, background-color 0.2s ease`,
                      cursor: "pointer",
                      zIndex: 3,
                    }}
                  />

                  {/* Popover */}
                  {popover === i && (
                    <div
                      data-tl-popover
                      data-testid={`timeline-popover-${it.year}`}
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{
                        ...(above
                          ? { top: LINE_OFFSET + 22 }
                          : { bottom: ROW_HEIGHT - LINE_OFFSET + 22 }),
                        backgroundColor: "#ffffff",
                        border: "1px solid #E8E8E8",
                        borderRadius: 0,
                        padding: 16,
                        maxWidth: 220,
                        width: 220,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                        zIndex: 5,
                      }}
                    >
                      <div style={{
                        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#C04028",
                        lineHeight: 1,
                      }}>
                        {it.year}
                      </div>
                      <div style={{
                        marginTop: 6,
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#1A1A1A",
                      }}>
                        {it.title}
                      </div>
                      <p style={{
                        marginTop: 8,
                        fontFamily: "Barlow, sans-serif",
                        fontSize: 12.5,
                        lineHeight: 1.55,
                        color: "#3D3D3D",
                      }}>
                        {it.popover || it.desc}
                      </p>
                    </div>
                  )}

                  {/* Stack content (year + title + desc) */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-[180px] pointer-events-none"
                    style={
                      above
                        ? { top: 0, bottom: LINE_OFFSET + 22, justifyContent: "flex-end" }
                        : { top: LINE_OFFSET + 22, bottom: 0, justifyContent: "flex-start" }
                    }
                  >
                    {above && it.pill && (
                      <span className="mb-2" style={pillStyle(isHover)}>{it.pill}</span>
                    )}
                    <div
                      style={{
                        ...yearStyle,
                        fontSize: isHover ? 31 : 28,
                        opacity: animOn || reduced ? 1 : 0,
                        transition: reduced
                          ? "none"
                          : `opacity 0.4s ease ${dotDelay + 0.2}s, font-size 0.2s ease`,
                      }}
                    >
                      {it.year}
                    </div>
                    <div
                      className="mt-2 text-center"
                      style={{
                        ...titleStyle,
                        opacity: animOn || reduced ? 1 : 0,
                        transition: reduced ? "none" : `opacity 0.4s ease ${dotDelay + 0.25}s`,
                      }}
                    >
                      {it.title}
                    </div>
                    <div
                      className="mt-1.5"
                      style={{
                        ...descStyle,
                        opacity: animOn || reduced ? (isHover ? 1 : 0.85) : 0,
                        transition: reduced ? "none" : `opacity 0.3s ease ${dotDelay + 0.3}s`,
                      }}
                    >
                      {it.desc}
                    </div>
                    {!above && it.pill && (
                      <span className="mt-2" style={pillStyle(isHover)}>{it.pill}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile — vertical with draw animation */}
      <div className="md:hidden relative pl-6">
        <div
          className="absolute left-2 top-1"
          style={{
            width: 2,
            backgroundColor: "#C04028",
            height: animOn || reduced ? "100%" : "0%",
            transition: reduced ? "none" : "height 1.5s ease-in-out",
            bottom: 1,
          }}
          aria-hidden="true"
        />
        <ul className="space-y-8">
          {items.map((it, i) => {
            const dotDelay = dotOf(i);
            return (
              <li key={it.year} className="relative" data-testid={`timeline-item-mobile-${it.year}`}>
                <button
                  type="button"
                  data-tl-dot
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopover((p) => (p === i ? null : i));
                  }}
                  className="absolute -left-[14px] top-1.5 p-0 border-0"
                  data-testid={`timeline-dot-mobile-${it.year}`}
                  aria-label={`${it.year} ${it.title}`}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 9999,
                    backgroundColor: "#C04028",
                    boxShadow: "0 0 0 4px #ffffff",
                    transform: `scale(${animOn || reduced ? 1 : 0})`,
                    transition: reduced
                      ? "none"
                      : `transform 0.4s cubic-bezier(.34,1.56,.64,1) ${dotDelay}s`,
                  }}
                />
                {popover === i && (
                  <div
                    data-tl-popover
                    data-testid={`timeline-popover-mobile-${it.year}`}
                    style={{
                      position: "absolute",
                      left: 32,
                      top: 0,
                      backgroundColor: "#ffffff",
                      border: "1px solid #E8E8E8",
                      borderRadius: 0,
                      padding: 16,
                      maxWidth: 220,
                      width: 220,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                      zIndex: 5,
                    }}
                  >
                    <div style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#C04028",
                      lineHeight: 1,
                    }}>
                      {it.year}
                    </div>
                    <div style={{
                      marginTop: 6,
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#1A1A1A",
                    }}>
                      {it.title}
                    </div>
                    <p style={{
                      marginTop: 8,
                      fontFamily: "Barlow, sans-serif",
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      color: "#3D3D3D",
                    }}>
                      {it.popover || it.desc}
                    </p>
                  </div>
                )}
                {it.pill && (
                  <span className="inline-block mb-1.5" style={pillStyle(false)}>{it.pill}</span>
                )}
                <div style={{ ...yearStyle, fontSize: 24 }}>{it.year}</div>
                <div className="mt-1.5" style={titleStyle}>{it.title}</div>
                <div className="mt-1" style={{ ...descStyle, maxWidth: "100%", textAlign: "left" }}>
                  {it.desc}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// ── Styles ──────────────────────────────────────────────────────────────
const pillStyle = (active = false) => ({
  fontFamily: "Barlow, sans-serif",
  fontSize: 9,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  backgroundColor: active ? "#C04028" : "#FBF0ED",
  color: active ? "#ffffff" : "#C04028",
  border: "1px solid #C04028",
  borderRadius: 9999,
  padding: "2px 8px",
  display: "inline-block",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease, color 0.2s ease",
});

const yearStyle = {
  fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
  fontWeight: 700,
  fontSize: 28,
  color: "#C04028",
  lineHeight: 1,
};
const titleStyle = {
  fontFamily: "Barlow, sans-serif",
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#1A1A1A",
};
const descStyle = {
  fontFamily: "Barlow, sans-serif",
  fontSize: 13,
  color: "#3D3D3D",
  maxWidth: 180,
  textAlign: "center",
  lineHeight: 1.55,
};

export default Timeline;
