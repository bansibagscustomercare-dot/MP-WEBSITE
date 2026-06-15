import React, { useState } from "react";

/**
 * WorldMap — Simplified hand-drawn world silhouette with three highlighted
 * regions (India, Africa, Middle East). Pure SVG, no external lib.
 */
export const WorldMap = () => {
  const [hover, setHover] = useState(null);

  const regions = {
    india: {
      label: "India",
      copy: "Pan-India dealer & OEM supply network across all major construction hubs.",
    },
    middleeast: {
      label: "Middle East",
      copy: "Active export partnerships across UAE, Oman, Saudi Arabia and beyond.",
    },
    africa: {
      label: "Africa",
      copy: "Trusted parts supply to construction equipment manufacturers across Africa.",
    },
  };

  return (
    <div className="relative w-full" data-testid="world-map">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        role="img"
        aria-label="World map with MP Industries supply regions highlighted: India, Middle East, and Africa"
      >
        {/* Background landmass paths (simplified silhouettes) */}
        {/* North America */}
        <path
          className="region-path"
          d="M60,90 L210,75 L260,110 L240,170 L180,200 L120,210 L80,180 L55,150 Z"
        />
        {/* South America */}
        <path
          className="region-path"
          d="M225,260 L280,255 L300,310 L290,380 L260,420 L235,400 L225,340 Z"
        />
        {/* Europe */}
        <path
          className="region-path"
          d="M460,110 L560,100 L590,140 L555,170 L500,175 L470,150 Z"
        />
        {/* Asia (excluding India) */}
        <path
          className="region-path"
          d="M590,90 L820,80 L880,140 L860,200 L770,220 L700,200 L650,175 L600,155 Z"
        />
        {/* Australia */}
        <path
          className="region-path"
          d="M790,330 L900,325 L920,375 L870,400 L800,390 L780,355 Z"
        />

        {/* ── Highlighted region: Africa ───────────────────────────────── */}
        <path
          className={`region-path highlight ${hover === "africa" ? "" : ""}`}
          d="M470,200 L580,200 L620,250 L615,330 L580,395 L520,415 L470,390 L455,330 L450,260 Z"
          onMouseEnter={() => setHover("africa")}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover("africa")}
          onBlur={() => setHover(null)}
          tabIndex={0}
          aria-label="Africa supply region"
          data-testid="region-africa"
        />

        {/* ── Highlighted region: Middle East ──────────────────────────── */}
        <path
          className="region-path highlight"
          d="M590,175 L660,170 L685,210 L660,245 L615,250 L585,225 Z"
          onMouseEnter={() => setHover("middleeast")}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover("middleeast")}
          onBlur={() => setHover(null)}
          tabIndex={0}
          aria-label="Middle East supply region"
          data-testid="region-middleeast"
        />

        {/* ── Highlighted region: India ────────────────────────────────── */}
        <path
          className="region-path highlight"
          d="M685,200 L740,205 L760,240 L750,290 L720,300 L695,265 L678,230 Z"
          onMouseEnter={() => setHover("india")}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover("india")}
          onBlur={() => setHover(null)}
          tabIndex={0}
          aria-label="India supply region"
          data-testid="region-india"
        />

        {/* Labels */}
        <text x="720" y="260" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#fff" pointerEvents="none">India</text>
        <text x="610" y="215" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#fff" pointerEvents="none">M. East</text>
        <text x="510" y="320" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#fff" pointerEvents="none">Africa</text>
      </svg>

      {/* Tooltip card */}
      {hover && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-2 bg-ink text-white px-4 py-3 rounded-md shadow-xl max-w-xs text-center"
          role="status"
          data-testid="region-tooltip"
        >
          <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#FBB69F]">
            {regions[hover].label}
          </div>
          <div className="text-[14px] mt-1 leading-snug text-white/90">
            {regions[hover].copy}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
