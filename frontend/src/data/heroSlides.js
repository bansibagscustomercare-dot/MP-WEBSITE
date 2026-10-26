// Hero accordion slides — edit this file to change the homepage slider.
// Add your photos to /public/images/hero/ and set `image` below (e.g. "/images/hero/drum-yoke.webp").
// Recommended image: 1600x900 or wider, landscape, product centred-right with space on the left/bottom for text.
// Keep exactly 5 slides for the best layout.
export const heroSlides = [
  {
    id: "drums",
    title: "Drums & Yokes",
    kicker: "Main product",
    headline: "Heavy-duty cast drums and yokes",
    cta: "View drums",
    to: "/products?category=drums",
    image: "/images/hero.png", // TODO: replace with /images/hero/drums.webp
  },
  {
    id: "gears",
    title: "Gears & Rings",
    kicker: "Main product",
    headline: "Precision bevel, pinion and ring gears",
    cta: "View gears",
    to: "/products?category=gears",
    image: "/workshop.jpg", // TODO
  },
  {
    id: "shafts",
    title: "Shafts & Clutch",
    kicker: "Main product",
    headline: "Hardened shafts and clutch assemblies",
    cta: "View shafts",
    to: "/products?category=shafts",
    image: "/about-workshop.jpg", // TODO
  },
  {
    id: "bearings",
    title: "Bearings & Pedestals",
    kicker: "Main product",
    headline: "Bearings and cast pedestals for every shaft",
    cta: "View bearings",
    to: "/products?category=bearings",
    image: "/images/header-products.png", // TODO
  },
  {
    id: "pulleys",
    title: "Pulleys & Rollers",
    kicker: "Main product",
    headline: "Pulleys and rollers for hoists and conveyors",
    cta: "View pulleys",
    to: "/products?category=pulleys",
    image: "/images/header-about.png", // TODO
  },
];
