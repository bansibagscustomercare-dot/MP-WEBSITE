import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-testid="back-to-top-btn"
      className="fixed bottom-5 left-5 z-40 inline-flex items-center justify-center w-12 h-12 bg-white border border-black hover:bg-black hover:text-white transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
