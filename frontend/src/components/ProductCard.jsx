import React from "react";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/products";

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const categoryLabel = (id) =>
  categories.find((c) => c.id === id)?.label || id;

export const ProductCard = ({ product, onInquire }) => {
  const handleId = `product-card-${slugify(product.name)}`;
  return (
    <article className="group card-mp flex flex-col" data-testid={handleId}>
      <div className="product-ph aspect-[4/3] flex items-center justify-center relative">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-contain" />
        ) : (
          <img
            src="/logo.png"
            alt="MP Industries logo"
            style={{ width: "42%", height: "auto", objectFit: "contain", opacity: 0.12 }}
          />
        )}
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1 border-t border-hairline">
        <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#3A3F45]">
          {categoryLabel(product.category)}
        </div>
        <h3 className="font-display font-bold text-[24px] leading-[1.05] text-black">
          {product.name}
        </h3>
        <p className="text-[14px] leading-relaxed flex-1 text-[#3A3F45]">{product.detail}</p>
        <button
          type="button"
          onClick={() => onInquire(product)}
          className="btn-primary mt-3 w-full justify-between"
          data-testid={`${handleId}-inquire-btn`}
        >
          Inquire now <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
