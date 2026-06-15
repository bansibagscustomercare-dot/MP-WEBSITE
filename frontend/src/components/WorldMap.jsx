import React, { useEffect, useMemo, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";

/**
 * WorldMap — accurate atlas-style world map (Natural Earth 110m via world-atlas).
 * Highlights India, all African countries, and Middle East in brand red.
 */
const TOPO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ── Highlight sets (UN M49 numeric ids used by world-atlas) ────────────
const INDIA_ID = "356";
const AFRICA_IDS = new Set([
  "12","24","204","72","854","108","132","120","140","148","174","178","180",
  "384","262","818","226","232","748","231","266","270","288","324","624","404",
  "426","430","434","450","454","466","478","480","504","508","516","562","566",
  "646","678","686","690","694","706","710","728","729","834","768","788","800",
  "894","716","175","438", "732"
]);
// Middle East per spec
const MIDDLE_EAST_IDS = new Set([
  "682","784","634","414","48","512","400","368","364","887","760","422","376"
]);

const isHighlight = (id) =>
  id === INDIA_ID || AFRICA_IDS.has(id) || MIDDLE_EAST_IDS.has(id);

const regionFor = (id) => {
  if (id === INDIA_ID) return "india";
  if (AFRICA_IDS.has(id)) return "africa";
  if (MIDDLE_EAST_IDS.has(id)) return "middleeast";
  return null;
};

const REGION_LABELS = {
  india: "India",
  africa: "Africa",
  middleeast: "Middle East",
};

// SVG canvas
const WIDTH = 980;
const HEIGHT = 500;

export const WorldMap = () => {
  const [features, setFeatures] = useState([]);
  const [hover, setHover] = useState(null); // { region, x, y }
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(TOPO_URL)
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled) return;
        const collection = feature(topo, topo.objects.countries);
        setFeatures(collection.features);
      })
      .catch(() => setFeatures([]));
    return () => { cancelled = true; };
  }, []);

  const projection = useMemo(
    () => geoNaturalEarth1().fitSize([WIDTH, HEIGHT], { type: "Sphere" }),
    []
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  // Compute centroids for the three highlighted region labels.
  const labelPositions = useMemo(() => {
    // Manually set label positions in projected coordinates so they look right.
    // Natural Earth proj fitted to 980x500.
    return {
      india: projection([78, 22]),         // central India
      africa: projection([20, 2]),         // central Africa
      middleeast: projection([48, 26]),    // Saudi Arabia
    };
  }, [projection]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      data-testid="world-map"
      style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#D6E8F0" }}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto block"
        role="img"
        aria-label="World map highlighting MP Industries supply regions: India, Africa, Middle East"
      >
        {/* Ocean background */}
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="#D6E8F0" />

        {features.map((f) => {
          const id = String(f.id);
          const region = regionFor(id);
          const highlighted = !!region;
          return (
            <path
              key={id}
              d={path(f)}
              className={`wm-country ${highlighted ? "wm-highlight" : ""}`}
              onMouseEnter={(e) => {
                if (!highlighted) return;
                const rect = containerRef.current.getBoundingClientRect();
                setHover({
                  region,
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              onMouseMove={(e) => {
                if (!highlighted) return;
                const rect = containerRef.current.getBoundingClientRect();
                setHover((h) =>
                  h && h.region === region
                    ? { region, x: e.clientX - rect.left, y: e.clientY - rect.top }
                    : h
                );
              }}
              onMouseLeave={() => setHover(null)}
              tabIndex={highlighted ? 0 : -1}
              aria-label={highlighted ? `${REGION_LABELS[region]} supply region` : undefined}
              data-testid={highlighted ? `region-${region}` : undefined}
            />
          );
        })}

        {/* Labels (pin + text) on top of map */}
        {Object.entries(labelPositions).map(([region, pos]) => {
          if (!pos) return null;
          const [cx, cy] = pos;
          return (
            <g key={region} pointerEvents="none">
              <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" stroke="#C04028" strokeWidth="1.5" />
              <text
                x={cx + 10}
                y={cy + 4}
                fontFamily="Inter, sans-serif"
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
      {hover && (
        <div
          className="absolute px-3 py-2 rounded-md shadow-xl pointer-events-none"
          role="status"
          data-testid="region-tooltip"
          style={{
            top: hover.y + 14,
            left: hover.x + 14,
            backgroundColor: "#1A1A1A",
            color: "#fff",
            fontSize: "12px",
            lineHeight: 1.3,
            maxWidth: 180,
          }}
        >
          <div style={{ color: "#FBB69F", fontWeight: 700, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {REGION_LABELS[hover.region]}
          </div>
          <div style={{ marginTop: 2 }}>Active supply region</div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
