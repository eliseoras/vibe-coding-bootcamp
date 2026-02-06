import { useNavigate } from "react-router-dom";
import { getAmazonSearchLink } from "@/lib/affiliate";

// Map keywords to internal routes
const SEARCH_MAP: Record<string, string> = {
  tent: "/gear/tents",
  tents: "/gear/tents",
  shelter: "/gear/tents",
  sleeping: "/gear/sleeping-bags",
  bag: "/gear/sleeping-bags",
  stove: "/gear/stoves",
  cook: "/gear/stoves",
  kitchen: "/gear/stoves",
  pack: "/gear/backpacks",
  backpack: "/gear/backpacks",
  bagpack: "/gear/backpacks", // Common typo
};

export function useSearch() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    const term = query.toLowerCase().trim();
    if (!term) return;

    // Check for direct category match
    const internalRoute =
      SEARCH_MAP[term] ||
      Object.keys(SEARCH_MAP).find((key) => term.includes(key));

    if (internalRoute) {
      // If we have a guide for it, go there
      navigate(
        typeof internalRoute === "string"
          ? internalRoute
          : SEARCH_MAP[internalRoute],
      );
    } else {
      // If we don't have a guide, monetize it! Send them to Amazon search.
      // Opens in new tab so they don't leave our site entirely.
      window.open(getAmazonSearchLink(term), "_blank");
    }
  };

  return { handleSearch };
}
