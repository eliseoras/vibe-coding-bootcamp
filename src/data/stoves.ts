import { Product } from "@/types/gear";

export const stoveMetrics = [
  { key: "fuel", label: "Fuel Type" },
  { key: "boil_time", label: "Boil Time (1L)" },
  { key: "weight", label: "Weight" },
  { key: "ignition", label: "Ignition Type" },
  { key: "simmer", label: "Simmer Control" },
];

export const stoveProducts: Product[] = [
  {
    id: "stove-1",
    name: "Jetboil Flash",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=300&h=300",
    // Used ASIN builder for cleaner link
    affiliateLink: "https://www.amazon.com/dp/B076DGT9B7?tag=somts09-20",
    isTopPick: true,
    specs: {
      fuel: { label: "Fuel", value: "Isobutane" },
      boil_time: { label: "Boil Time", value: "100 sec", isHighlight: true },
      weight: { label: "Weight", value: "13.1 oz" },
      ignition: { label: "Ignition", value: "Push Button" },
      simmer: { label: "Simmer", value: "Poor", isNegative: true },
    },
  },
  {
    id: "stove-2",
    name: "MSR PocketRocket 2",
    image:
      "https://images.unsplash.com/photo-1595163351939-b7b51e06e00e?auto=format&fit=crop&q=80&w=300&h=300",
    // Used ASIN builder
    affiliateLink: "https://www.amazon.com/dp/B01N5O7551?tag=somts09-20",
    specs: {
      fuel: { label: "Fuel", value: "Isobutane" },
      boil_time: { label: "Boil Time", value: "3.5 min" },
      weight: { label: "Weight", value: "2.6 oz", isHighlight: true },
      ignition: { label: "Ignition", value: "Manual" },
      simmer: { label: "Simmer", value: "Good" },
    },
  },
  {
    id: "stove-3",
    name: "Coleman Classic Propane",
    image:
      "https://images.unsplash.com/photo-1621257929497-29367d5ce801?auto=format&fit=crop&q=80&w=300&h=300",
    // YOUR SPECIFIC AFFILIATE LINK
    affiliateLink:
      "https://www.amazon.com/gp/aw/d/B0784VYVL1?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=082eb4b98296833c800be3e797fbc2e8&hsa_cr_id=0&qid=1770398059&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&pd_rd_w=f2UFv&content-id=amzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d%3Aamzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_p=9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_r=7YJMNPYAQT7ZJDM6GYNH&pd_rd_wg=a34VS&pd_rd_r=d1323daa-8dd6-472f-aff6-5acf2248ed57&th=1&linkCode=ll2&tag=somts09-20&linkId=76ae257ec46b8b0b379d03a0ff840a43&language=en_US&ref_=as_li_ss_tl",
    specs: {
      fuel: { label: "Fuel", value: "Propane" },
      boil_time: { label: "Boil Time", value: "4 min" },
      weight: { label: "Weight", value: "12 lbs", isNegative: true },
      ignition: { label: "Ignition", value: "Manual" },
      simmer: { label: "Simmer", value: "Excellent", isHighlight: true },
    },
  },
];
