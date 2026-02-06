export function AboutRoute() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-4 py-12">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Our Mission
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed">
          We believe the wrong gear shouldn't ruin a good trip. That's why we
          test everything before we recommend it.
        </p>
      </div>

      <div className="space-y-8">
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <h2 className="mb-4 text-2xl font-bold">How We Test</h2>
          <p className="text-muted-foreground mb-6">
            Unlike many review sites, we don't just rewrite manufacturer specs.
            We take gear out into the field. From the rainy forests of the PNW
            to the arid deserts of Utah, our team of experienced campers puts
            every product through rigorous real-world testing.
          </p>

          <h3 className="mb-3 text-xl font-bold">Our Promise</h3>
          <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6">
            <li>We buy most of our own gear to avoid bias.</li>
            <li>If a brand sends us a sample, we disclose it immediately.</li>
            <li>We never recommend a product we wouldn't use ourselves.</li>
            <li>We update our guides regularly as new models are released.</li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">Affiliate Disclosure</h2>
          <p className="text-muted-foreground">
            GearTrust Camping is reader-supported. When you buy through links on
            our site, we may earn an affiliate commission. This comes at no
            extra cost to you and helps fund our testing operations.
          </p>
        </div>
      </div>
    </div>
  );
}
