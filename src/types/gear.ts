export interface ProductAttribute {
  label: string;
  value: string;
  isHighlight?: boolean; // For "Best-in-class" styling
  isNegative?: boolean; // For "Stiff below 40F" styling
}

export interface Product {
  id: string;
  name: string;
  image: string;
  affiliateLink: string;
  isTopPick?: boolean;
  specs: Record<string, ProductAttribute>; // e.g., { "length": { label: "Length", value: "25ft" } }
}

export interface ComparisonTableProps {
  title: string;
  description: string;
  products: Product[];
  metrics: string[]; // List of keys to show in the table (e.g., ["length", "weight", "price"])
}
