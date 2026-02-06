import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-muted/30 border-border mt-auto border-t py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-10">
        <div className="text-foreground flex items-center gap-3">
          <div className="text-primary size-5">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">GearTrust Camping</h2>
        </div>

        <div className="text-muted-foreground flex gap-8 text-sm font-medium">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link
            to="/disclosure"
            className="hover:text-primary transition-colors"
          >
            Affiliate Disclosure
          </Link>
        </div>

        <div className="text-muted-foreground/60 text-xs">
          © {new Date().getFullYear()} GearTrust Reviews. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
