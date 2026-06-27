import { images } from "./site";

export type Property = {
  id: string;
  title: string;
  type: "Apartment" | "Penthouse" | "Studio" | "Duplex";
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  price: number; // USD
  status: "Available" | "Reserved" | "Sold";
  floor: number;
  view: string;
  cover: string;
  gallery: string[];
  highlights: string[];
  description: string;
};

export const properties: Property[] = [
  {
    id: "the-aurelia",
    title: "The Aurelia — 3 Bed Sky Suite",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 215,
    price: 485000,
    status: "Available",
    floor: 12,
    view: "Skyline & garden",
    cover: images.livingBright,
    gallery: [images.livingBright, images.bedroomGreen, images.bathroom, images.balcony, images.hallway],
    highlights: ["Private balcony", "Walk-in wardrobe", "Open-plan kitchen", "Floor-to-ceiling glazing"],
    description:
      "A flagship three-bedroom sky suite occupying the corner of the twelfth floor. Bathed in light through full-height windows, with a private balcony framing uninterrupted skyline views, custom joinery and a chef-grade kitchen.",
  },
  {
    id: "the-meridian",
    title: "The Meridian — 2 Bed Residence",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    areaSqm: 142,
    price: 295000,
    status: "Available",
    floor: 8,
    view: "Garden",
    cover: images.livingSheer,
    gallery: [images.livingSheer, images.bedroomYellow, images.bathroom, images.balcony],
    highlights: ["Sheer floor-to-ceiling drapes", "Engineered oak floors", "Private balcony"],
    description:
      "A serene two-bedroom residence with sheer drapery, engineered oak floors and a layout that flows from lounge to balcony in one uninterrupted line.",
  },
  {
    id: "the-haven",
    title: "The Haven — 3 Bed Family Residence",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 168,
    price: 365000,
    status: "Available",
    floor: 6,
    view: "Courtyard",
    cover: images.livingWarm,
    gallery: [images.livingWarm, images.loungeChester, images.bedroomGreen, images.bathroom],
    highlights: ["Recessed cove lighting", "Chesterfield-ready lounge", "Eat-in kitchen", "Guest WC"],
    description:
      "A warm, layered three-bedroom home with recessed cove lighting, an eat-in kitchen and generous entertaining space — built for family living.",
  },
  {
    id: "the-arcadia",
    title: "The Arcadia — 1 Bed Pied-à-Terre",
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    areaSqm: 68,
    price: 145000,
    status: "Reserved",
    floor: 4,
    view: "Balcony",
    cover: images.bedroomYellow,
    gallery: [images.bedroomYellow, images.bathroom, images.balcony],
    highlights: ["Designer bedding", "Rain shower", "Private balcony"],
    description:
      "A polished one-bedroom retreat with designer finishes, a rain shower and a balcony tailored for quiet mornings.",
  },
  {
    id: "the-belvedere",
    title: "The Belvedere — 3 Bed Garden Duplex",
    type: "Duplex",
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 232,
    price: 525000,
    status: "Available",
    floor: 2,
    view: "Gardens",
    cover: images.loungeChester,
    gallery: [images.loungeChester, images.livingWarm, images.bedroomGreen, images.hallway],
    highlights: ["Double-height living", "Private terrace", "Statement staircase"],
    description:
      "A garden-level duplex with double-height living, a sculptural staircase and a private terrace opening onto the landscaped courtyard.",
  },
  {
    id: "the-solene",
    title: "The Solène — 2 Bed Corner Suite",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    areaSqm: 156,
    price: 325000,
    status: "Available",
    floor: 10,
    view: "Dual aspect",
    cover: images.bedroomGreen,
    gallery: [images.bedroomGreen, images.livingSheer, images.bathroom, images.balcony],
    highlights: ["Dual-aspect light", "Custom joinery", "Private balcony"],
    description:
      "A dual-aspect corner suite with light from two sides, bespoke joinery and a balcony positioned for morning sun.",
  },
];

export const getProperty = (id: string) => properties.find((p) => p.id === id);
