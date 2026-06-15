import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * CategoryCard — Accuplus-style category teaser used on the homepage.
 * Shows: icon · arrow · category name (Playfair, brand) · description · pill tags.
 */
export const CategoryCard = ({ icon: Icon, title, description, tags = [], to = "/products" }) => {
  return (
    <Link
      to={to}
      className="card-mp p-7 flex flex-col gap-4 group h-full"
      data-testid={`category-card-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-md flex items-center justify-center"
          style={{ backgroundColor: "#FBF0ED" }}
        >
          <Icon size={22} color="#D05030" />
        </div>
        <ArrowRight
          size={20}
          className="text-graphite/40 group-hover:text-[#D05030] transition-colors mt-1"
        />
      </div>

      <div>
        <h3
          className="font-display font-semibold text-[22px] leading-tight"
          style={{ color: "#D05030" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "#3D3D3D" }}>
          {description}
        </p>
      </div>

      <div className="mt-auto pt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default CategoryCard;
