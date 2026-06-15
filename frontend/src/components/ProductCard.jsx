import React from "react";

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const ProductCard = ({ product, onInquire }) => {
  const handleId = `product-card-${slugify(product.name)}`;
  return (
    <article
      className="card-mp overflow-hidden flex flex-col"
      data-testid={handleId}
    >
      <div className="product-ph aspect-[4/3] flex items-center justify-center relative">
        <svg width="84" height="60" viewBox="0 0 64 46" aria-hidden="true">
          <ellipse cx="32" cy="23" rx="28" ry="19" fill="#D05030" opacity="0.18" />
          <text
            x="32"
            y="30"
            textAnchor="middle"
            fontFamily="'Barlow Condensed', Impact, sans-serif"
            fontWeight="800"
            fontSize="20"
            fill="#D05030"
            opacity="0.85"
          >
            MP
          </text>
        </svg>
        <div className="absolute bottom-2 right-2 text-[10px] font-semibold uppercase tracking-wider text-[#4A4A4A]/70 bg-white/70 px-2 py-0.5 rounded">
          Image coming soon
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-[16px] font-semibold text-ink leading-snug">
          {product.name}
        </h3>
        <p className="text-[13.5px] text-graphite leading-relaxed flex-1">
          {product.detail}
        </p>
        <button
          type="button"
          onClick={() => onInquire(product)}
          className="btn-primary mt-2 w-full"
          data-testid={`${handleId}-inquire-btn`}
        >
          Inquire Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
