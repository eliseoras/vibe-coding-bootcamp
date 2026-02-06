import { Product } from "@/types/gear";
import { getAmazonProductLink } from "@/lib/affiliate";

export const backpackMetrics = [
  { key: "capacity", label: "Capacity (L)" },
  { key: "weight", label: "Weight" },
  { key: "material", label: "Material" },
  { key: "access", label: "Main Access" },
  { key: "hipbelt", label: "Hipbelt Pockets" },
];

export const backpackProducts: Product[] = [
  {
    id: "pack-1",
    name: "Osprey Atmos AG 65",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B09J5T7M95"), // Using placeholder ASIN - Replace with real Atmos ASIN later
    isTopPick: true,
    specs: {
      capacity: { label: "Capacity", value: "65 L" },
      weight: { label: "Weight", value: "4 lbs 9 oz" },
      material: { label: "Material", value: "210D Nylon" },
      access: {
        label: "Access",
        value: "Top, Bottom, Front",
        isHighlight: true,
      },
      hipbelt: { label: "Hipbelt", value: "Yes" },
    },
  },
  {
    id: "pack-2",
    name: "Gregory Baltoro 65",
    image:
      "https://images.unsplash.com/photo-1622383838356-d7b822d05775?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B09M8R8R2T"), // Using placeholder ASIN - Replace with real Baltoro ASIN later
    specs: {
      capacity: { label: "Capacity", value: "65 L" },
      weight: { label: "Weight", value: "4 lbs 13 oz" },
      material: { label: "Material", value: "210D Nylon" },
      access: { label: "Access", value: "Top, U-Zip" },
      hipbelt: {
        label: "Hipbelt",
        value: "Yes (Waterproof)",
        isHighlight: true,
      },
    },
  },
];
