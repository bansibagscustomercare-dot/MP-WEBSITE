import React, { useEffect, useMemo, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "../data/site";

const TOPO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const INDIA_ID = "356";
const AFRICA_IDS = new Set([
  "12","24","204","72","854","108","132","120","140","148","174","178","180",
  "384","262","818","226","232","748","231","266","270","288","324","624","404",
  "426","430","434","450","454","466","478","480","504","508","516","562","566",
  "646","678","686","690","694","706","710","728","729","834","768","788","800",
  "894","716","175","438","732"
]);
const MIDDLE_EAST_IDS = new Set([
  "682","784","634","414","48","512","400","368","364","887","760","422","376"
]);

const regionFor = (id) => {
  if (id === INDIA_ID) return "india";
  if (AFRICA_IDS.has(id)) return "africa";
  if (MIDDLE_EAST_IDS.has(id)) return "middleeast";
  return null;
};

const REGION_LABELS = { india: "India", africa: "Africa", middleeast: "Middle East" };

const TOOLTIP_LINE = {
  india: "Pan-India supply network across all states",
  africa: "Active export market since 2017",
  middleeast: "Trusted by procurement teams across the Gulf",
};

const DETAILS = {
  india: {
    body:
      "MP Industries supplies precision concrete mixer machine parts to manufacturers, dealers, OEM suppliers and repair shops across every Indian state. From Gujarat to Tamil Nadu — we deliver.",
    stat: "All India · Direct Manufacturer",
  },
  africa: {
    body:
      "We actively export to construction markets across the African continent, supplying concrete mixer components to buyers in East, West and Southern Africa.",
    stat: "Exporting since 2017",
  },
  middleeast: {
    body:
      "Trusted by procurement teams and contractors across Saudi Arabia, UAE, Qatar, Kuwait and beyond. MP Industries is a reliable export partner for the Gulf construction industry.",
    stat: "Gulf & Levant Region",
  },
};

const inquiryURL = (region) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    `Hi MP Industries! I am interested in supply/export to ${REGION_LABELS[region]}. Please share more details.`
  )}`;

const WIDTH = 980;
const HEIGHT = 500;

export const WorldMap = () => {
  const [features, setFeatures] = useState([]);
  const [hoverRegion, setHoverRegion] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(null);
  const [linesVisible, setLinesVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(TOPO_URL)
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled) return;
        const coll = feature(topo, topo.objects.countries);
        setFeatures(coll.features);
      })
      .catch(() => setFeatures([]));
    return () => { cancelled = true; };
  }, []);

  // Reveal animated lines when in viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setLinesVisible(true);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const projection = useMemo(
    () => geoNaturalEarth1().fitSize([WIDTH, HEIGHT], { type: "Sphere" }),
    []
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const labelPositions = useMemo(() => ({
    india: projection([78, 22]),
    africa: projection([20, 2]),
    middleeast: projection([48, 26]),
  }), [projection]);

  const ahmedabad = useMemo(() => projection([72.5714, 23.0225]), [projection]);

  const onRegionEnter = (region, e) => {
    if (!region) return;
    setHoverRegion(region);
    const rect = containerRef.current.getBoundingClientRect();
    setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const onRegionMove = (region, e) => {
    if (!region || hoverRegion !== region) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const onRegionLeave = () => setHoverRegion(null);
  const onRegionClick = (region) => {
    setActive((curr) => (curr === region ? null : region));
  };

  // Build supply-line paths
  const lines = useMemo(() => {
    if (!ahmedabad) return [];
    return [
      { id: "to-africa", to: labelPositions.africa },
      { id: "to-me", to: labelPositions.middleeast },
    ].filter((l) => l.to);
  }, [ahmedabad, labelPositions]);

  return (
    <div ref={sectionRef}>
      <div
        ref={containerRef}
        className="relative w-full"
        data-testid="world-map"
        style={{ borderRadius: 0, overflow: "hidden", backgroundColor: "#D6E8F0" }}
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-auto block"
          role="img"
          aria-label="World map highlighting MP Industries supply regions: India, Africa, Middle East"
        >
          <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="#D6E8F0" />

          {features.map((f) => {
            const id = String(f.id);
            const region = regionFor(id);
            const highlighted = !!region;
            const dim = hoverRegion && region && hoverRegion !== region;
            return (
              <path
                key={id}
                d={path(f)}
                className={`wm-country ${highlighted ? "wm-highlight" : ""}`}
                style={{
                  opacity: dim ? 0.7 : 1,
                  cursor: highlighted ? "pointer" : "default",
                  transition: "opacity 0.2s ease, fill 0.2s ease",
                }}
                onMouseEnter={(e) => onRegionEnter(region, e)}
                onMouseMove={(e) => onRegionMove(region, e)}
                onMouseLeave={onRegionLeave}
                onClick={() => highlighted && onRegionClick(region)}
                onKeyDown={(e) => {
                  if (!highlighted) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onRegionClick(region);
                  }
                }}
                tabIndex={highlighted ? 0 : -1}
                aria-label={highlighted ? `${REGION_LABELS[region]} supply region` : undefined}
                data-testid={highlighted ? `region-${region}` : undefined}
              />
            );
          })}

          {/* Animated supply lines from Ahmedabad */}
          {linesVisible && ahmedabad && lines.map((l, idx) => (
            <line
              key={l.id}
              x1={ahmedabad[0]}
              y1={ahmedabad[1]}
              x2={l.to[0]}
              y2={l.to[1]}
              stroke="#C04028"
              strokeWidth="1.8"
              strokeDasharray="6 5"
              strokeLinecap="round"
              opacity="0.6"
              style={{
                animation: `wm-march 1.5s linear infinite`,
                animationDelay: `${idx * 0.3}s`,
              }}
            />
          ))}

          {/* Pulsing origin pin at Ahmedabad */}
          {linesVisible && ahmedabad && (
            <g style={{ pointerEvents: "none" }}>
              <circle cx={ahmedabad[0]} cy={ahmedabad[1]} r="5" fill="#C04028" opacity="0.35">
                <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={ahmedabad[0]} cy={ahmedabad[1]} r="3.5" fill="#C04028" />
            </g>
          )}

          {/* Region labels */}
          {Object.entries(labelPositions).map(([region, pos]) => {
            if (!pos) return null;
            const [cx, cy] = pos;
            return (
              <g key={region} pointerEvents="none">
                <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" stroke="#C04028" strokeWidth="1.5" />
                <text
                  x={cx + 10}
                  y={cy + 4}
                  fontFamily="Barlow, sans-serif"
                  fontSize="12"
                  fontWeight="700"
                  fill="#FFFFFF"
                  stroke="#C04028"
                  strokeWidth="3"
                  paintOrder="stroke"
                  style={{ paintOrder: "stroke" }}
                >
                  {REGION_LABELS[region]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoverRegion && (
          <div
            className="absolute px-3 py-2 rounded-none pointer-events-none"
            role="status"
            data-testid="region-tooltip"
            style={{
              top: hoverPos.y + 14,
              left: hoverPos.x + 14,
              backgroundColor: "#1A1A1A",
              color: "#fff",
              fontSize: 12,
              lineHeight: 1.4,
              maxWidth: 220,
              zIndex: 4,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 13, color: "#FBB69F" }}>
              {REGION_LABELS[hoverRegion]}
            </div>
            <div style={{ marginTop: 2, color: "rgba(255,255,255,0.92)" }}>
              {TOOLTIP_LINE[hoverRegion]}
            </div>
          </div>
        )}

        <style>{`
          @keyframes wm-march {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -22; }
          }
          @media (prefers-reduced-motion: reduce) {
            [data-testid="world-map"] svg line { animation: none !important; }
            [data-testid="world-map"] svg circle animate { display: none !important; }
          }
        `}</style>
      </div>

      {/* Detail card */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 560,
          overflow: "hidden",
          maxHeight: active ? 360 : 0,
          opacity: active ? 1 : 0,
          marginTop: active ? 20 : 0,
          transition: "max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease",
        }}
        data-testid="region-detail-card-wrapper"
      >
        {active && (
          <div
            className="bg-white relative"
            style={{
              border: "1px solid #E8E8E8",
              borderRadius: 0,
              padding: 24,
              boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
            }}
            data-testid={`region-detail-card-${active}`}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close region detail"
              className="absolute top-3 right-3 w-8 h-8 rounded-none flex items-center justify-center hover:bg-surface"
              data-testid="region-detail-close"
            >
              <X size={16} />
            </button>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#C04028",
                lineHeight: 1.2,
              }}
            >
              {REGION_LABELS[active]}
            </h3>
            <p
              className="mt-2"
              style={{ color: "#3D3D3D", fontSize: 14, lineHeight: 1.65 }}
            >
              {DETAILS[active].body}
            </p>
            <div
              className="mt-3"
              style={{
                color: "#C04028",
                fontFamily: "Barlow, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {DETAILS[active].stat}
            </div>
            <a
              href={inquiryURL(active)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-none text-white font-semibold"
              style={{ backgroundColor: "#25D366", fontSize: 14, fontFamily: "Barlow, sans-serif" }}
              data-testid={`region-inquire-${active}`}
            >
              <MessageCircle size={16} />
              Inquire for this region →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
