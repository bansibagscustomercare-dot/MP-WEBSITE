import React, { useEffect, useRef } from "react";

/**
 * ScrollReveal — IntersectionObserver-based reveal. Adds `in-view` class.
 * Use: <ScrollReveal as="section" delay={120}>...</ScrollReveal>
 */
export const ScrollReveal = ({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in-view"), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
