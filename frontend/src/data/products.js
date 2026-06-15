// MP Industries — 69 product catalog
// Categories: drums, gears, shafts, clutch, bearings, pedestals, pulleys, rollers, brakes, chain-wheels, brackets, moulds, misc

export const categories = [
  { id: "all", label: "All Products" },
  { id: "drums", label: "Drums" },
  { id: "gears", label: "Gears" },
  { id: "shafts", label: "Shafts" },
  { id: "clutch", label: "Clutch" },
  { id: "bearings", label: "Bearings" },
  { id: "pedestals", label: "Pedestals" },
  { id: "pulleys", label: "Pulleys" },
  { id: "rollers", label: "Rollers" },
  { id: "brakes", label: "Brakes" },
  { id: "chain-wheels", label: "Chain Wheels" },
  { id: "brackets", label: "Brackets" },
  { id: "moulds", label: "Moulds" },
  { id: "misc", label: "Miscellaneous" },
];

export const products = [
  // ── Drums ─────────────────────────────────────────────
  { id: 1, name: "Drum & Yoke", category: "drums", detail: "Heavy-duty cast drum and yoke assembly for concrete mixers." },
  { id: 2, name: "7/5 Drum", category: "drums", detail: "Precision-cast 7/5 drum for half-bag mixer machines." },
  { id: 3, name: "Yoke", category: "drums", detail: "Reinforced yoke component for mixer drum support." },
  { id: 4, name: "Drum Cap (Type A)", category: "drums", detail: "Type A drum cap — wear-resistant cast iron." },
  { id: 5, name: "Drum Cap (Type B)", category: "drums", detail: "Type B drum cap — heavy-section variant." },
  { id: 6, name: "Wire Drum Big", category: "drums", detail: "Large wire drum for hoist applications." },
  { id: 7, name: "Wire Drum Small", category: "drums", detail: "Compact wire drum for light-duty hoists." },
  { id: 8, name: "Tower Hoist Drum (Bearing Type)", category: "drums", detail: "Tower hoist drum with integrated bearing seat." },

  // ── Gears ─────────────────────────────────────────────
  { id: 9, name: "12 Teeth Bevel Gear (Heavy)", category: "gears", detail: "Heavy-duty 12-tooth bevel gear, precision cut." },
  { id: 10, name: "12 Teeth Bevel Gear", category: "gears", detail: "Standard 12-tooth bevel gear for mixer drives." },
  { id: 11, name: "1/2 Bag 10 Teeth Gear", category: "gears", detail: "10-tooth gear designed for half-bag mixers." },
  { id: 12, name: "1/2 Bag 18 Teeth Gear", category: "gears", detail: "18-tooth half-bag mixer transmission gear." },
  { id: 13, name: "Lime Mixer 16 Teeth Gear", category: "gears", detail: "16-tooth gear for lime mixer drive systems." },
  { id: 14, name: "14/10 14 Teeth Gear", category: "gears", detail: "14/10 series 14-tooth transmission gear." },
  { id: 15, name: "18 Teeth Winget Gear", category: "gears", detail: "Winget-compatible 18-tooth drive gear." },
  { id: 16, name: "15 Teeth Rolex Gear", category: "gears", detail: "Rolex-pattern 15-tooth gear for mixer drives." },
  { id: 17, name: "85 Teeth Millar Ring", category: "gears", detail: "Millar 85-tooth ring gear, precision-machined." },
  { id: 18, name: "85 Teeth Sayaji Ring", category: "gears", detail: "Sayaji-compatible 85-tooth ring gear." },
  { id: 19, name: "10/7 60 Teeth Clutch Gear", category: "gears", detail: "60-tooth clutch gear for 10/7 mixer series." },
  { id: 20, name: "1/2 Bag 70 Teeth Gear Ring", category: "gears", detail: "70-tooth ring gear for half-bag mixers." },
  { id: 21, name: "11 Teeth Bush Gear", category: "gears", detail: "11-tooth bush gear, bushed-bore design." },
  { id: 22, name: "10 Teeth Gear", category: "gears", detail: "Standard 10-tooth pinion gear." },

  // ── Shafts ────────────────────────────────────────────
  { id: 23, name: "12 Teeth Pinion Shaft", category: "shafts", detail: "Integrated 12-tooth pinion shaft, hardened." },
  { id: 24, name: "Top Shaft", category: "shafts", detail: "Top-mounted drive shaft for mixer assemblies." },
  { id: 25, name: "Drum Shaft", category: "shafts", detail: "Main drum support shaft, heat-treated." },
  { id: 26, name: "10 Teeth Pinion Shaft", category: "shafts", detail: "10-tooth integrated pinion shaft." },
  { id: 27, name: "Excentry Shaft", category: "shafts", detail: "Eccentric shaft for mixer vibration assemblies." },
  { id: 28, name: "Fiber Shaft", category: "shafts", detail: "Fiber-coated shaft for low-friction applications." },

  // ── Clutch ────────────────────────────────────────────
  { id: 29, name: "Clutch Con Male", category: "clutch", detail: "Male clutch cone, precision-finished mating surface." },
  { id: 30, name: "Clutch Arm Two Part", category: "clutch", detail: "Two-part clutch arm assembly, serviceable design." },

  // ── Bearings ──────────────────────────────────────────
  { id: 31, name: "Plain Bearing Without Bush", category: "bearings", detail: "Plain bearing housing, no bush variant." },
  { id: 32, name: "Plain Bearing With Bush", category: "bearings", detail: "Plain bearing housing with pressed-in bush." },
  { id: 33, name: "Helix Bearing With Bush", category: "bearings", detail: "Helical bearing assembly with integral bush." },
  { id: 34, name: "GM Drum Bush", category: "bearings", detail: "GM-pattern drum bush, wear-resistant alloy." },

  // ── Pedestals ─────────────────────────────────────────
  { id: 35, name: "Yoke Bearing Pedestal", category: "pedestals", detail: "Pedestal-mounted yoke bearing support." },
  { id: 36, name: "Yoke Pedestal", category: "pedestals", detail: "Cast yoke pedestal for mixer frames." },
  { id: 37, name: "Hopper Pedestal", category: "pedestals", detail: "Hopper-side pedestal mount." },
  { id: 38, name: "Top Shaft Pedestal", category: "pedestals", detail: "Top shaft bearing pedestal, ribbed casting." },
  { id: 39, name: "Top Shaft Pedestal (Variant)", category: "pedestals", detail: "Alternate top shaft pedestal — extended boss." },
  { id: 40, name: "Dead Eye Pedestal", category: "pedestals", detail: "Dead-eye pedestal for fixed-axle mounts." },
  { id: 41, name: "Mini Dead Eye Bearing Pedestal", category: "pedestals", detail: "Compact dead-eye bearing pedestal." },
  { id: 42, name: "Bearing Pedestal", category: "pedestals", detail: "General-purpose bearing pedestal casting." },

  // ── Pulleys ───────────────────────────────────────────
  { id: 43, name: "Cable Roller Pulley", category: "pulleys", detail: "Cable guide roller pulley, grooved profile." },
  { id: 44, name: "Bearing Pulley", category: "pulleys", detail: "Pulley with integrated bearing seat." },
  { id: 45, name: "11\" Bush Pulley", category: "pulleys", detail: "11-inch pulley with pressed bush." },
  { id: 46, name: "20\" 2B Pulley", category: "pulleys", detail: "20-inch twin-belt (2B) pulley." },
  { id: 47, name: "3.5\" 2B Pulley", category: "pulleys", detail: "3.5-inch twin-belt (2B) pulley." },
  { id: 48, name: "Mini Crane Pulley", category: "pulleys", detail: "Compact pulley for mini-crane applications." },

  // ── Rollers ───────────────────────────────────────────
  { id: 49, name: "Bearing Roller", category: "rollers", detail: "Roller with sealed bearing fitment." },
  { id: 50, name: "Top Roller", category: "rollers", detail: "Top-mounted load roller, hardened surface." },
  { id: 51, name: "Bottom Roller", category: "rollers", detail: "Bottom support roller, heavy-section." },
  { id: 52, name: "Top Roller Pin", category: "rollers", detail: "Hardened pin for top roller assemblies." },
  { id: 53, name: "Fiber Roller", category: "rollers", detail: "Fiber-lined roller for low-noise operation." },

  // ── Brakes ────────────────────────────────────────────
  { id: 54, name: "Brake Band Lever", category: "brakes", detail: "Lever arm for brake band actuation." },
  { id: 55, name: "Brake Anchor", category: "brakes", detail: "Anchor bracket for brake band assemblies." },
  { id: 56, name: "Brake Shoe", category: "brakes", detail: "Lined brake shoe, wear-resistant compound." },
  { id: 57, name: "Break Patti", category: "brakes", detail: "Brake patti strip for band brake systems." },

  // ── Chain Wheels ──────────────────────────────────────
  { id: 58, name: "66 Teeth Chain Wheel", category: "chain-wheels", detail: "66-tooth chain wheel, precision-cut." },
  { id: 59, name: "86 Teeth Chain Wheel", category: "chain-wheels", detail: "86-tooth heavy-duty chain wheel." },
  { id: 60, name: "46 Teeth Chain Wheel", category: "chain-wheels", detail: "46-tooth chain drive sprocket." },
  { id: 61, name: "48 Teeth Chain Wheel", category: "chain-wheels", detail: "48-tooth chain drive sprocket." },

  // ── Brackets ──────────────────────────────────────────
  { id: 62, name: "DP Bracket (RH)", category: "brackets", detail: "Right-hand DP bracket, cast and machined." },

  // ── Moulds ────────────────────────────────────────────
  { id: 63, name: "Cube Mould", category: "moulds", detail: "Standard concrete cube test mould." },

  // ── Misc ──────────────────────────────────────────────
  { id: 64, name: "Excel with/without Bolts", category: "misc", detail: "Excel assembly — available with or without mounting bolts." },
  { id: 65, name: "Hub", category: "misc", detail: "Universal hub for mixer drive components." },
  { id: 66, name: "Balance Weight", category: "misc", detail: "Counter-balance weight, cast iron." },
  { id: 67, name: "Handle Lever", category: "misc", detail: "Operator handle lever, ergonomic grip." },
  { id: 68, name: "Hand Wheel Pipe Ring", category: "misc", detail: "Pipe ring for hand wheel assemblies." },
  { id: 69, name: "1/2 Bag Mixer Boss", category: "misc", detail: "Half-bag mixer boss — drive interface casting." },
];
