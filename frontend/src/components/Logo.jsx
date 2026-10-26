import React from "react";

export const Logo = ({ height = 44, withText = true }) => {
  return (
    <div className="flex items-center gap-3" data-testid="mp-logo">
      <img
        src="/logo.png"
        alt="MP Industries logo"
        style={{ height, width: "auto", objectFit: "contain", display: "block" }}
      />
      {withText && (
        <div
          className="leading-none"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#3D3D3D",
          }}
        >
          Concrete Mixer Parts
        </div>
      )}
    </div>
  );
};

export default Logo;
