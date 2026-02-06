import { ComparisonTable } from "@/components/comparison-table";
import { getCategoryData } from "@/data/index";
import { Link, useParams } from "react-router-dom";
import { NotFoundRoute } from "./not-found";

export function GearCategoryRoute() {
  const params = useParams<{ category: string }>();
  // Default to 'tents' if no category is provided (for the /gear fallback)
  const categorySlug = params.category || "tents";
  const data = getCategoryData(categorySlug);

  if (!data) {
    return <NotFoundRoute />;
  }

  return (
    <div className="animate-in fade-in flex flex-1 flex-col items-center duration-500">
      <div className="w-full max-w-7xl px-4 py-8 md:px-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex flex-wrap gap-2 text-sm font-medium">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            to="/gear"
            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            Gear Reviews
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{data.subtitle}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-10 flex flex-col gap-4">
          <h1 className="text-foreground text-4xl leading-tight font-black tracking-[-0.033em] md:text-5xl">
            {data.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed font-normal">
            {data.description}
          </p>
          <div className="text-primary/80 mt-2 flex items-center gap-2 text-sm font-medium">
            <span className="material-symbols-outlined text-base">
              verified
            </span>
            <span>Independent field testing & real-world analysis</span>
          </div>
        </div>

        {/* Comparison Table */}
        <ComparisonTable
          title="Side-by-Side Comparison"
          products={data.products}
          metrics={data.metrics}
        />

        {/* Trust Section */}
        <div className="mt-20 mb-12 text-center">
          <h2 className="text-foreground text-3xl leading-tight font-bold tracking-[-0.015em]">
            Why trust our gear guides?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            We don't just read specs. We test this gear in rain, wind, and
            sunshine to ensure it won't fail when you need it most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon="water_drop"
            title="Real Testing"
            description="We verify manufacturer claims with actual field use to ensure you stay dry, warm, and comfortable."
          />
          <FeatureCard
            icon="timer"
            title="Performance Analysis"
            description="We time setups, boil times, and pack-downs to give you realistic performance metrics."
          />
          <FeatureCard
            icon="backpack"
            title="Durability Check"
            description="We inspect zippers, seams, and materials to ensure your gear lasts more than one season."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border-border flex flex-col items-center rounded-xl border p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="bg-primary/10 text-primary mb-5 flex size-14 items-center justify-center rounded-full">
        <span className="material-symbols-outlined text-2xl font-bold">
          {icon}
        </span>
      </div>
      <h3 className="text-foreground mb-3 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
