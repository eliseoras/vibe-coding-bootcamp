import { Product } from "@/types/gear";
import { getAmazonProductLink } from "@/lib/affiliate";

export const tentMetrics = [
  { key: "capacity", label: "Sleeping Capacity" },
  { key: "weight", label: "Pack Weight" },
  { key: "setup", label: "Setup Time" },
  { key: "waterproof", label: "Waterproof Rating" },
  { key: "seasons", label: "Season Rating" },
];

export const tentProducts: Product[] = [
  {
    id: "tent-1",
    name: "North Face Wawona 6",
    image:
      "https://images.unsplash.com/photo-1527239441953-caffd968d952?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B09J5T7M95"), // Wawona 6 ASIN
    isTopPick: true,
    specs: {
      capacity: { label: "Capacity", value: "6 Person" },
      weight: { label: "Weight", value: "20 lbs 15 oz" },
      setup: { label: "Setup", value: "10 mins", isHighlight: true },
      waterproof: { label: "Waterproof", value: "1200mm" },
      seasons: { label: "Seasons", value: "3-Season" },
    },
  },
  {
    id: "tent-2",
    name: "Coleman Sundome 4",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B004J2GUOU"), // Sundome 4 ASIN
    specs: {
      capacity: { label: "Capacity", value: "4 Person" },
      weight: { label: "Weight", value: "9.8 lbs" },
      setup: { label: "Setup", value: "15 mins" },
      waterproof: { label: "Waterproof", value: "600mm", isNegative: true },
      seasons: { label: "Seasons", value: "2-Season" },
    },
  },
  {
    id: "tent-3",
    name: "MSR Hubba Hubba 2",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B09M8R8R2T"), // Hubba Hubba 2 ASIN
    specs: {
      capacity: { label: "Capacity", value: "2 Person" },
      weight: { label: "Weight", value: "3 lbs 4 oz", isHighlight: true },
      setup: { label: "Setup", value: "5 mins", isHighlight: true },
      waterproof: { label: "Waterproof", value: "3000mm" },
      seasons: { label: "Seasons", value: "3-Season" },
    },
  },
  {
    id: "tent-4",
    name: "REI Co-op Base Camp 4",
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B0B7K8K4F5"), // Generic similar ASIN as placeholder
    specs: {
      capacity: { label: "Capacity", value: "4 Person" },
      weight: { label: "Weight", value: "16 lbs 14 oz" },
      setup: { label: "Setup", value: "12 mins" },
      waterproof: { label: "Waterproof", value: "1500mm" },
      seasons: { label: "Seasons", value: "3-4 Season" },
    },
  },
];
