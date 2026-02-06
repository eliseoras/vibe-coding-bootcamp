import { Product, ProductAttribute } from "@/types/gear";
import { AffiliateButton } from "./affiliate-button";

interface ComparisonTableProps {
  title: string;
  products: Product[];
  metrics: { key: string; label: string }[];
}

export function ComparisonTable({
  title,
  products,
  metrics,
}: ComparisonTableProps) {
  return (
    <div className="w-full">
      <div className="border-border mb-6 flex items-center justify-between border-b pb-4">
        <h2 className="text-foreground text-2xl leading-tight font-bold tracking-[-0.015em]">
          {title}
        </h2>
        <div className="flex gap-2">
          <span className="bg-secondary text-muted-foreground rounded px-2 py-1 text-xs font-semibold tracking-wider uppercase">
            Updated: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="bg-card border-border overflow-hidden rounded-xl border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-muted/30 border-border border-b">
                {/* Sticky Header Column */}
                <th className="bg-muted/30 text-muted-foreground sticky left-0 z-30 min-w-[200px] p-6 text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
                  Metrics
                </th>

                {/* Product Headers */}
                {products.map((product) => (
                  <th
                    key={product.id}
                    className={`min-w-[280px] p-6 ${product.isTopPick ? "bg-primary/5" : ""}`}
                  >
                    <div className="relative flex flex-col items-center gap-3 text-center">
                      {product.isTopPick && (
                        <div className="bg-primary text-primary-foreground absolute top-0 -translate-y-full rounded px-2 py-0.5 text-[10px] font-black uppercase shadow-sm">
                          Top Pick
                        </div>
                      )}
                      <div className="border-border/50 h-24 w-24 overflow-hidden rounded-lg border bg-white p-2">
                        <img
                          className="h-full w-full object-contain"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
                      <span className="text-lg font-bold">{product.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric) => (
                <tr
                  key={metric.key}
                  className="border-border hover:bg-muted/10 border-b transition-colors"
                >
                  <td className="bg-card text-foreground sticky left-0 z-20 p-6 font-semibold shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    {metric.label}
                  </td>
                  {products.map((product) => {
                    const attr = product.specs[metric.key];
                    return (
                      <td
                        key={`${product.id}-${metric.key}`}
                        className={`p-6 text-center ${product.isTopPick ? "bg-primary/5" : ""}`}
                      >
                        <AttributeCell attribute={attr} />
                      </td>
                    );
                  })}
                </tr>
              ))}

              {/* Action Row */}
              <tr className="bg-muted/30">
                <td className="bg-muted/30 sticky left-0 z-20 p-6"></td>
                {products.map((product) => (
                  <td
                    key={`${product.id}-action`}
                    className={`p-6 ${product.isTopPick ? "bg-primary/10" : ""}`}
                  >
                    <AffiliateButton href={product.affiliateLink} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AttributeCell({ attribute }: { attribute?: ProductAttribute }) {
  if (!attribute) return <span className="text-muted-foreground">-</span>;

  if (attribute.value === "Yes" || attribute.value === "true") {
    return (
      <span className="material-symbols-outlined text-primary text-2xl">
        check_circle
      </span>
    );
  }

  if (attribute.value === "No" || attribute.value === "false") {
    return (
      <span className="material-symbols-outlined text-muted-foreground/50 text-2xl">
        cancel
      </span>
    );
  }

  if (attribute.isHighlight) {
    return (
      <span className="bg-primary/20 text-foreground inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase">
        {attribute.value}
      </span>
    );
  }

  if (attribute.isNegative) {
    return (
      <span className="bg-destructive/10 text-destructive inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase">
        {attribute.value}
      </span>
    );
  }

  return (
    <span className="text-muted-foreground font-medium">{attribute.value}</span>
  );
}
