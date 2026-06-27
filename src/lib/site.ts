import erika1 from "@/assets/erika_1.jpg.asset.json";
import erika2 from "@/assets/erika_2.jpg.asset.json";
import erika3 from "@/assets/erika_3.jpg.asset.json";
import erika4 from "@/assets/erika_4.jpg.asset.json";
import erika5 from "@/assets/erika_5.jpg.asset.json";
import erika6 from "@/assets/erika_6.jpg.asset.json";
import erika7 from "@/assets/erika_7.jpg.asset.json";
import erika8 from "@/assets/erika_8.jpg.asset.json";
import erika9 from "@/assets/erika_9.jpg.asset.json";
import erika10 from "@/assets/erika_10.jpg.asset.json";

export const images = {
  livingBright: erika1.url,
  bedroomGreen: erika2.url,
  hallway: erika3.url,
  livingWarm: erika4.url,
  loungeChester: erika5.url,
  exterior: erika6.url,
  bedroomYellow: erika7.url,
  bathroom: erika8.url,
  balcony: erika9.url,
  livingSheer: erika10.url,
};

export const galleryImages = [
  { src: images.exterior, alt: "Erica Residence tower exterior at golden hour", cat: "Exterior" },
  { src: images.livingBright, alt: "Sunlit penthouse living room with balcony", cat: "Interiors" },
  { src: images.livingSheer, alt: "Floor-to-ceiling windows in lounge", cat: "Interiors" },
  { src: images.loungeChester, alt: "Chesterfield lounge with feature lighting", cat: "Interiors" },
  { src: images.livingWarm, alt: "Open-plan living and kitchen", cat: "Interiors" },
  { src: images.bedroomYellow, alt: "Master bedroom with en-suite", cat: "Bedrooms" },
  { src: images.bedroomGreen, alt: "Guest bedroom with private balcony", cat: "Bedrooms" },
  { src: images.bathroom, alt: "Marble-clad bathroom with rain shower", cat: "Bathrooms" },
  { src: images.hallway, alt: "Foyer with accent mirror and console", cat: "Interiors" },
  { src: images.balcony, alt: "Private balcony overlooking the gardens", cat: "Exterior" },
];

export type NavItem = { label: string; to: string };

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Residences", to: "/properties" },
  { label: "Gallery", to: "/gallery" },
  { label: "Investment", to: "/investment" },
  { label: "Amenities", to: "/amenities" },
  { label: "Location", to: "/location" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export const SITE = {
  name: "Erica Residence",
  tagline: "Elevated city living, designed without compromise.",
  phone: "+254 700 000 000",
  whatsapp: "254700000000",
  email: "hello@ericaresidence.com",
  address: "Kilimani, Nairobi, Kenya",
};
