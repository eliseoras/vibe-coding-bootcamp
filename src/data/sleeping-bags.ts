import { Product } from "@/types/gear";
import { getAmazonProductLink } from "@/lib/affiliate";

export const sleepingBagMetrics = [
  { key: "temp", label: "Temperature Rating" },
  { key: "weight", label: "Weight" },
  { key: "insulation", label: "Insulation Type" },
  { key: "shape", label: "Shape" },
  { key: "packed_size", label: "Packed Size" },
];

export const sleepingBagProducts: Product[] = [
  {
    id: "bag-1",
    name: "Nemo Disco 15",
    image:
      "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B08N6Y2N6Z"), // Nemo Disco ASIN
    isTopPick: true,
    specs: {
      temp: { label: "Temp", value: "15°F / -9°C" },
      weight: { label: "Weight", value: "2 lbs 11 oz" },
      insulation: {
        label: "Insulation",
        value: "650 Fill Down",
        isHighlight: true,
      },
      shape: { label: "Shape", value: "Spoon" },
      packed_size: { label: "Packed", value: "9 x 12 in" },
    },
  },
  {
    id: "bag-2",
    name: "Kelty Cosmic 20",
    image:
      "https://images.unsplash.com/photo-1526401281623-279a4955492e?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B08N73Z7X9"), // Kelty Cosmic ASIN
    specs: {
      temp: { label: "Temp", value: "20°F / -7°C" },
      weight: { label: "Weight", value: "2 lbs 13 oz" },
      insulation: { label: "Insulation", value: "550 Fill Down" },
      shape: { label: "Shape", value: "Mummy" },
      packed_size: { label: "Packed", value: "8 x 13 in" },
    },
  },
  {
    id: "bag-3",
    name: "Marmot Trestles 30",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=300&h=300",
    affiliateLink: getAmazonProductLink("B0764L6K8M"), // Marmot Trestles ASIN
    specs: {
      temp: { label: "Temp", value: "30°F / -1°C" },
      weight: { label: "Weight", value: "3 lbs 1 oz" },
      insulation: {
        label: "Insulation",
        value: "Synthetic",
        isHighlight: true,
      },
      shape: { label: "Shape", value: "Mummy" },
      packed_size: { label: "Packed", value: "9.5 x 19 in" },
    },
  },
];
