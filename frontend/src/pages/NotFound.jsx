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
    <section className="bg-white min-h-[70vh] flex items-center" data-testid="not-found-page">
      <div className="container-mp text-center py-20">
        <div className="font-display font-bold text-[#D05030] text-[88px] sm:text-[120px] leading-none">404</div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">Page not found.</h1>
        <p className="lead mt-4 max-w-xl mx-auto">
          The page you're looking for may have moved or never existed. Let's get you back to something useful.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/" className="btn-primary" data-testid="404-home-btn">
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
