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
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 800,
            color: "#ffffff",
            fontSize: "clamp(36px, 5.2vw, 60px)",
            lineHeight: 1.02,
            letterSpacing: 0,
          }}
        >
          {title}
        </h1>
        {subtext && (
          <p
            className="mt-2 max-w-2xl"
            style={{
              fontFamily: "Barlow, sans-serif",
              color: "rgba(255,255,255,0.85)",
              fontSize: 17,
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
