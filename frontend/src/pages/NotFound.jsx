import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO
      title="Page Not Found | MP Industries"
      description="The page you're looking for doesn't exist. Browse our products or return home."
      path="/404"
    />
    <section className="bg-cream min-h-[70vh] flex items-center" data-testid="not-found-page">
      <div className="container-mp text-center py-20">
        <div
          className="font-display font-bold leading-none"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#D05030",
            fontSize: "clamp(5rem, 14vw, 8.5rem)",
          }}
        >
          404
        </div>
        <h1 className="h1-hero mt-3">Page Not Found.</h1>
        <p className="lead mt-4 max-w-xl mx-auto">
          The page you're looking for may have moved or never existed. Let's get you back to something useful.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#D05030" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#B8402A")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D05030")}
            data-testid="404-home-btn"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <Link to="/products" className="btn-secondary" data-testid="404-products-btn">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
