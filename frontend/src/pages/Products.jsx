import React, { useMemo, useState } from "react";
import { Search, X, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import InquiryModal from "../components/InquiryModal";
import ScrollReveal from "../components/ScrollReveal";
import { products, categories } from "../data/products";
import { whatsappChatURL } from "../data/site";

const Products = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = category === "all" || p.category === category;
      const qOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.detail.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, category]);

  return (
    <>
      <SEO
        title="Products | 69+ Concrete Mixer Machine Parts — MP Industries"
        description="Browse 69+ concrete mixer machine parts from MP Industries: drums, gears, shafts, bearings, pulleys, clutch and brake assemblies. Live search and instant WhatsApp inquiry."
        keywords="mixer parts catalog, concrete mixer drum, mixer bevel gear, mixer ring gear, mixer pulley, mixer clutch, mixer bearing, mixer pinion shaft, mixer spare parts India"
        path="/products"
      />

      <PageHeader
        testId="products-header"
        image="/images/header-products.png"
        eyebrow="Catalog"
        title="Our Products."
        subtext="Precision-engineered concrete mixer machine parts. 69+ components for every application."
      />

      <section
        className="bg-white-section sticky z-20"
        style={{ top: "var(--nav-height)", borderBottom: "1px solid #E8E8E8" }}
      >
        <div className="container-mp py-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2" size={18} color="#3D3D3D" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products... e.g. Bevel Gear, Drum, Pulley"
              data-testid="products-search-input"
              aria-label="Search products"
              className="w-full h-11 pl-11 pr-11 rounded-lg border bg-white text-[14px] outline-none focus:border-[#C04028] focus:ring-2 focus:ring-[#C04028]/15"
              style={{ borderColor: "#E8E8E8" }}
            />
            {query && (
              <button
                aria-label="Clear search"
                onClick={() => setQuery("")}
                data-testid="products-search-clear"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md hover:bg-surface flex items-center justify-center"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto pb-1.5" data-testid="category-chips">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`chip ${category === c.id ? "chip-active" : ""}`}
                data-testid={`chip-${c.id}`}
                aria-pressed={category === c.id}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-section" data-testid="products-grid-section">
        <div className="container-mp pt-8 pb-16 md:pt-10 md:pb-20">
          {filtered.length === 0 ? (
            <div className="text-center py-16 max-w-md mx-auto" data-testid="products-no-results">
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 28, color: "#1A1A1A" }}>
                No products found
              </div>
              <p className="mt-2" style={{ color: "#3D3D3D", fontSize: 14 }}>
                Try a different search or contact us directly — we'll help you find the right part.
              </p>
              <a
                href={whatsappChatURL("Hi MP Industries! I am looking for a specific part. Can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white"
                style={{ backgroundColor: "#25D366", fontSize: 14 }}
                data-testid="no-results-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <div
                className="mb-4"
                style={{ fontFamily: "Inter", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, color: "#3D3D3D" }}
                data-testid="products-count"
              >
                Showing {filtered.length} of {products.length} products
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((p, i) => (
                  <ScrollReveal key={p.id} delay={Math.min(i * 25, 200)}>
                    <ProductCard product={p} onInquire={setInquiryProduct} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <InquiryModal
        open={!!inquiryProduct}
        product={inquiryProduct}
        onClose={() => setInquiryProduct(null)}
      />
    </>
  );
};

export default Products;
