import React from "react";
import { whatsappChatURL } from "../data/site";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappChatURL()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MP Industries on WhatsApp"
      data-testid="floating-whatsapp-btn"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        fill="#fff"
      >
        <path d="M19.11 17.79c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.23-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.23 3.4 5.4 4.77.76.33 1.34.52 1.8.67.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.16-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37zM16.02 4C9.42 4 4.05 9.37 4.05 15.97c0 2.27.62 4.4 1.7 6.22L4 28l5.99-1.65a11.92 11.92 0 0 0 6.03 1.62h.01c6.6 0 11.97-5.37 11.97-11.97A11.93 11.93 0 0 0 16.02 4zm0 21.55h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.55.98.95-3.46-.23-.36a9.55 9.55 0 0 1-1.45-5.19c0-5.27 4.31-9.56 9.6-9.56 2.56 0 4.97 1 6.78 2.81a9.49 9.49 0 0 1 2.81 6.77c0 5.28-4.3 9.56-9.59 9.56z"/>
      </svg>
      <span
        className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-none text-[13px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ backgroundColor: "#1A1A1A" }}
        role="tooltip"
      >
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
