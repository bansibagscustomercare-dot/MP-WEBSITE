import React, { useMemo, useState } from "react";
import { Search, X, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
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
      const qOk = !q || p.name.toLowerCase().includes(q) || p.detail.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
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

      <header className="bg-white border-b border-hairline" data-testid="products-header">
        <div className="container-mp pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="eyebrow">Catalog</div>
          <h1 className="h1-section mt-2">Our Products</h1>
          <p className="lead mt-3 max-w-2xl">
            Precision-engineered concrete mixer machine parts. 69+ components for every application.
          </p>
        </div>
      </header>

      <section className="bg-white sticky top-[var(--nav-height)] z-20 border-b border-hairline">
        <div className="container-mp py-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2" size={18} color="#4A4A4A" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products... e.g. Bevel Gear, Drum, Pulley"
              data-testid="products-search-input"
              aria-label="Search products"
              className="w-full h-12 pl-11 pr-11 rounded-md border border-hairline bg-white text-[15px] outline-none focus:border-[#D05030] focus:ring-2 focus:ring-[#D05030]/15"
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

          <div className="mt-4 -mx-1 flex gap-2 overflow-x-auto pb-2" data-testid="category-chips">
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

      <section className="bg-white" data-testid="products-grid-section">
        <div className="container-mp py-10 md:py-14">
          {filtered.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto" data-testid="products-no-results">
              <div className="font-display font-bold text-3xl text-ink">No products found</div>
              <p className="mt-3 text-graphite">
                Try a different search or contact us directly — we'll help you find the right part.
              </p>
              <a
                href={whatsappChatURL("Hi MP Industries! I am looking for a specific part. Can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white"
                style={{ backgroundColor: "#25D366" }}
                data-testid="no-results-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <div className="text-[13px] uppercase tracking-[0.18em] font-semibold text-graphite mb-5" data-testid="products-count">
                Showing {filtered.length} of {products.length} products
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((p, i) => (
                  <ScrollReveal key={p.id} delay={Math.min(i * 30, 240)}>
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
