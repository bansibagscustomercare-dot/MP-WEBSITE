import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <a href="#main" className="skip-link" data-testid="skip-to-main">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main id="main" className="flex-1" data-testid="main-content">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
