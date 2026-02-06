import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HomeRoute() {
  return (
    <div className="flex flex-col gap-12 py-10">
      <section className="bg-secondary/30 border-border/50 space-y-6 rounded-3xl border px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-foreground text-4xl font-black tracking-tighter md:text-6xl">
            Gear you can <span className="text-primary">trust</span> in the
            wild.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            We buy, test, and break camping gear so you don't have to. Honest
            reviews, data-driven comparisons, and zero fluff.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 rounded-full px-8 text-base font-bold"
            asChild
          >
            <Link to="/gear/tents">View Top Tents</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-background h-12 rounded-full px-8 text-base font-bold"
            asChild
          >
            <Link to="/about">Our Testing Process</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <span className="material-symbols-outlined text-primary">
            local_fire_department
          </span>
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            title="Tents & Shelter"
            image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=400"
            link="/gear/tents"
          />
          <CategoryCard
            title="Sleeping Bags"
            image="https://images.unsplash.com/photo-1627662168806-efa33a7cda86?auto=format&fit=crop&q=80&w=400"
            link="/gear/sleeping-bags"
          />
          <CategoryCard
            title="Camp Kitchen"
            image="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=400"
            link="/gear/stoves"
          />
          <CategoryCard
            title="Backpacks"
            image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400"
            link="/gear/backpacks"
          />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="group bg-muted relative aspect-[4/3] overflow-hidden rounded-2xl"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="group-hover:text-primary text-xl font-bold text-white transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
