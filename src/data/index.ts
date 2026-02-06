import { Product } from "@/types/gear";
import { tentProducts, tentMetrics } from "./tents";
import { sleepingBagProducts, sleepingBagMetrics } from "./sleeping-bags";
import { stoveProducts, stoveMetrics } from "./stoves";
import { backpackProducts, backpackMetrics } from "./backpacks";

export interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  metrics: { key: string; label: string }[];
}

const categories: Record<string, CategoryData> = {
  tents: {
    title: "Top 4 Camping Tents for 2025",
    subtitle: "Best Camping Tents",
    description:
      "Whether you're backpacking deep into the wilderness or car camping with the whole family, a reliable tent is your most important piece of gear. We compared the top models based on weight, setup time, and storm resistance.",
    products: tentProducts,
    metrics: tentMetrics,
  },
  "sleeping-bags": {
    title: "Best Sleeping Bags for 2025",
    subtitle: "Best Sleeping Bags",
    description:
      "Stay warm and comfortable on your next adventure. We tested the warmth-to-weight ratio, compressibility, and comfort of the top down and synthetic bags on the market.",
    products: sleepingBagProducts,
    metrics: sleepingBagMetrics,
  },
  stoves: {
    title: "Top Camping Stoves Reviewed",
    subtitle: "Best Camping Stoves",
    description:
      "From boiling water in seconds to gourmet camp cooking, choosing the right stove matters. We tested boil times, wind resistance, and simmer control.",
    products: stoveProducts,
    metrics: stoveMetrics,
  },
  backpacks: {
    title: "Best Backpacking Packs 2025",
    subtitle: "Best Backpacks",
    description:
      "Carrying your life on your back requires a pack that fits perfectly. We loaded these packs with 40lbs of gear to test suspension, comfort, and durability.",
    products: backpackProducts,
    metrics: backpackMetrics,
  },
};

export function getCategoryData(slug: string): CategoryData | null {
  return categories[slug] || null;
}
