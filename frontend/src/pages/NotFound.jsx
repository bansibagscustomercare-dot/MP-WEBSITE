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
      <div className="container-mp text-center py-16">
        <img
          src="/logo.png"
          alt="MP Industries logo"
          style={{ height: 64, width: "auto", objectFit: "contain", display: "block", margin: "0 auto 24px" }}
        />
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: "#C04028",
            fontSize: 120,
            lineHeight: 1,
          }}
        >
          404
        </div>
        <h1 className="h1-hero mt-2">Page Not Found.</h1>
        <p className="lead mt-3 max-w-xl mx-auto">
          The page you're looking for may have moved or never existed. Let's get you back to something useful.
        </p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <Link to="/" className="btn-primary" data-testid="404-home-btn">
            <ArrowLeft size={16} /> Back to Home
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
