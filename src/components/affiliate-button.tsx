import { Button } from "@/components/ui/button";

interface AffiliateButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export function AffiliateButton({
  href,
  children = "View on Amazon",
  className,
}: AffiliateButtonProps) {
  return (
    <Button
      asChild
      className={`w-full font-black shadow-sm ${className}`}
      size="lg"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <span>{children}</span>
        <span className="material-symbols-outlined text-[1.2em] leading-none">
          open_in_new
        </span>
      </a>
    </Button>
  );
}
