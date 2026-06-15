import React from "react";

/**
 * Timeline — horizontal (desktop) / vertical (mobile)
 * Single red baseline + filled dots + alternating year placement
 * (odd indexes above the line, even indexes below).
 *
 * Items shape:
 *   { year: "1990", title: "THE BEGINNING", desc: "...", pill?: "1ST GENERATION" }
 */
const ROW_HEIGHT = 380; // total desktop track height
const LINE_OFFSET = ROW_HEIGHT / 2;

export const Timeline = ({ items = [] }) => {
  return (
    <div className="relative" data-testid="timeline">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative" style={{ height: ROW_HEIGHT }}>
          {/* Baseline */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: LINE_OFFSET,
              height: 2,
              backgroundColor: "#C04028",
            }}
            aria-hidden="true"
          />
          <ul
            className="relative grid h-full"
            style={{
              gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
            }}
          >
            {items.map((it, i) => {
              const above = i % 2 === 0;
              return (
                <li
                  key={it.year}
                  className="relative h-full"
                  data-testid={`timeline-item-${it.year}`}
                >
                  {/* Dot at the line */}
                  <span
                    className="absolute left-1/2"
                    style={{
                      top: LINE_OFFSET,
                      width: 14,
                      height: 14,
                      borderRadius: 9999,
                      backgroundColor: "#C04028",
                      boxShadow: "0 0 0 4px #ffffff",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                    }}
                  />
                  {/* Content */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-[180px]"
                    style={
                      above
                        ? { top: 0, bottom: LINE_OFFSET + 18, justifyContent: "flex-end" }
                        : { top: LINE_OFFSET + 18, bottom: 0, justifyContent: "flex-start" }
                    }
                  >
                    {above && it.pill && (
                      <span className="mb-2" style={pillStyle}>{it.pill}</span>
                    )}
                    <div style={yearStyle}>{it.year}</div>
                    <div className="mt-2 text-center" style={titleStyle}>{it.title}</div>
                    <div className="mt-1.5" style={descStyle}>{it.desc}</div>
                    {!above && it.pill && (
                      <span className="mt-2" style={pillStyle}>{it.pill}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile — vertical */}
      <div className="md:hidden relative pl-6">
        <div
          className="absolute left-2 top-1 bottom-1"
          style={{ width: 2, backgroundColor: "#C04028" }}
          aria-hidden="true"
        />
        <ul className="space-y-8">
          {items.map((it) => (
            <li key={it.year} className="relative" data-testid={`timeline-item-mobile-${it.year}`}>
              <span
                className="absolute -left-[14px] top-1.5"
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: "#C04028",
                  boxShadow: "0 0 0 4px #ffffff",
                }}
              />
              {it.pill && (
                <span className="inline-block mb-1.5" style={pillStyle}>{it.pill}</span>
              )}
              <div style={{ ...yearStyle, fontSize: 24 }}>{it.year}</div>
              <div className="mt-1.5" style={titleStyle}>{it.title}</div>
              <div
                className="mt-1"
                style={{ ...descStyle, maxWidth: "100%", textAlign: "left" }}
              >
                {it.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const pillStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: 9,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  backgroundColor: "#FBF0ED",
  color: "#C04028",
  border: "1px solid #C04028",
  borderRadius: 9999,
  padding: "2px 8px",
  display: "inline-block",
  whiteSpace: "nowrap",
};
const yearStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontWeight: 700,
  fontSize: 28,
  color: "#C04028",
  lineHeight: 1,
};
const titleStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#1A1A1A",
};
const descStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
  color: "#3D3D3D",
  maxWidth: 180,
  textAlign: "center",
  lineHeight: 1.55,
};

export default Timeline;
