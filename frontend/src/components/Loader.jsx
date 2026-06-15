import React from "react";

export const Loader = () => (
  <div
    className="min-h-[60vh] w-full flex items-center justify-center"
    role="status"
    aria-live="polite"
    data-testid="page-loader"
  >
    <div className="flex items-center gap-3">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ backgroundColor: "#C04028", animation: "pulse-ring 1.4s ease-in-out infinite" }}
      />
      <span className="text-sm font-medium tracking-wide" style={{ color: "#4A4A4A" }}>
        Loading…
      </span>
    </div>
  </div>
);

export default Loader;
