import React from "react";

/**
 * PageHeader — full-width banner with background image + dark overlay.
 * Used on Products, About, Contact.
 */
export const PageHeader = ({ image, eyebrow, title, subtext, testId }) => {
  return (
    <header className="page-header" data-testid={testId}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="page-header__img"
      />
      <div className="page-header__overlay" />
      <div className="container-mp page-header__content">
        <div className="eyebrow eyebrow-light">{eyebrow}</div>
        <h1
          className="mt-3"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "clamp(28px, 4.2vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.005em",
          }}
        >
          {title}
        </h1>
        {subtext && (
          <p
            className="mt-2 max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.85)",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {subtext}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
