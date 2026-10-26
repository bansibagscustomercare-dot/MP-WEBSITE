// Hero accordion slides — edit this file to change the homepage slider.
// title    = name on the narrow strip (rotated) when the slice is closed
// headline = text shown on the slice when it is open
// image    = 1920x900 webp in /public/images/hero/ (product on the right, empty space on the left for text)
// focus    = horizontal % of the image to show on the narrow (closed) strip, so the product stays visible
// tone     = "light" (dark text, for light photos) or "dark" (white text, for dark photos)
export const heroSlides = [
  { id: "drums", title: "Drums", kicker: "", headline: "CI Miller mixer machine drum", cta: "View drums",
    to: "/products?category=drums", image: "/images/hero/drums.webp", focus: 71, tone: "light" },
  { id: "rings", title: "Miller & Sayaji Ring", kicker: "", headline: "85 teeth Sayaji Ring", cta: "View rings",
    to: "/products?category=gears", image: "/images/hero/rings.webp", focus: 71, tone: "light" },
  { id: "shafts", title: "Bevel & Drum Shaft", kicker: "", headline: "12 teeth bevel shaft", cta: "View shafts",
    to: "/products?category=shafts", image: "/images/hero/shafts.webp", focus: 71, tone: "light" },
  { id: "pedestals", title: "Pedestals", kicker: "", headline: "Yoke & bearing pedestals", cta: "View pedestals",
    to: "/products?category=pedestals", image: "/images/hero/pedestals.webp", focus: 71, tone: "light" },
  { id: "pulleys", title: "Bearing pulleys", kicker: "", headline: "Bearing pulleys", cta: "View pulleys",
    to: "/products?category=pulleys", image: "/images/hero/pulleys.webp", focus: 71, tone: "light" },
];
