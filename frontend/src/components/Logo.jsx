import React from "react";

export const Logo = ({ size = 38, withText = true, textColor = "#1A1A1A" }) => {
  return (
    <div className="flex items-center gap-3" data-testid="mp-logo">
      <svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 64 46"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <radialGradient id="mp-grad" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E36645" />
            <stop offset="60%" stopColor="#C04028" />
            <stop offset="100%" stopColor="#A8381F" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="23" rx="30" ry="21" fill="url(#mp-grad)" />
        <ellipse cx="32" cy="23" rx="30" ry="21" fill="none" stroke="#7A2A1A" strokeWidth="1.5" />
        <ellipse cx="32" cy="20.5" rx="26" ry="16" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <text
          x="32"
          y="30"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="800"
          fontSize="22"
          fill="#FFFFFF"
          letterSpacing="-0.5"
        >
          MP
        </text>
      </svg>
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
