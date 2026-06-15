import React from "react";
import { categories } from "../data/products";

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const categoryLabel = (id) =>
  categories.find((c) => c.id === id)?.label || id;

export const ProductCard = ({ product, onInquire }) => {
  const handleId = `product-card-${slugify(product.name)}`;
  return (
    <article
      className="card-mp overflow-hidden flex flex-col p-4"
      data-testid={handleId}
    >
      <div className="product-ph aspect-square flex items-center justify-center relative">
        <img
          src="/logo.png"
          alt="MP Industries logo"
          style={{ width: "55%", height: "auto", objectFit: "contain", opacity: 0.15 }}
        />
      </div>

      <div className="pt-4 pb-1 flex flex-col gap-1.5 flex-1">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "#C04028" }}
        >
          {categoryLabel(product.category)}
        </div>
        <h3
          className="font-display font-semibold text-[16px] leading-snug"
          style={{ color: "#1A1A1A" }}
        >
          {product.name}
        </h3>
        <p className="text-[13px] leading-relaxed flex-1" style={{ color: "#3D3D3D" }}>
          {product.detail}
        </p>
        <button
          type="button"
          onClick={() => onInquire(product)}
          className="mt-3 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md text-white font-semibold text-[14px] transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "#C04028", fontFamily: "Inter, sans-serif" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A03520")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#C04028")}
          data-testid={`${handleId}-inquire-btn`}
        >
          Inquire Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
