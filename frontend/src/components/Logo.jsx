import React from "react";

export const Logo = ({ height = 44, withText = true, textColor = "#1A1A1A" }) => {
  return (
    <div className="flex items-center gap-3" data-testid="mp-logo">
      <img
        src="/logo.png"
        alt="MP Industries logo"
        style={{ height, width: "auto", objectFit: "contain", display: "block" }}
      />
      {withText && (
        <div className="leading-none">
          <div
            className="font-display font-bold tracking-tight text-[19px] sm:text-[20px]"
            style={{ color: textColor, letterSpacing: "-0.005em" }}
          >
            MP Industries
          </div>
          <div
            className="text-[10px] mt-1 font-medium tracking-[0.16em] uppercase"
            style={{ color: "#3D3D3D" }}
          >
            Concrete Mixer Parts
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
