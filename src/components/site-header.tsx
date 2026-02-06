import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 transition-colors duration-200 md:px-10">
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-foreground flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <div className="text-primary size-6">
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
          <h2 className="hidden text-lg leading-tight font-bold tracking-[-0.015em] sm:block">
            GearTrust Camping
          </h2>
        </Link>
        <nav className="hidden items-center gap-6 md:flex lg:gap-9">
          <NavLink
            to="/gear"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`
            }
          >
            Gear Reviews
          </NavLink>
          <NavLink
            to="/guides"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`
            }
          >
            Camping Guides
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-4">
        <label className="flex hidden !h-10 max-w-64 min-w-40 flex-col lg:flex">
          <div className="flex h-full w-full flex-1 items-stretch overflow-hidden rounded-lg">
            <div className="text-muted-foreground bg-muted flex items-center justify-center border-r-0 border-none pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="text-foreground bg-muted placeholder:text-muted-foreground/70 flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden border-none px-4 pl-2 text-base leading-normal font-normal focus:ring-0 focus:outline-0"
              placeholder="Search gear..."
            />
          </div>
        </label>
        <Button className="font-bold">
          <span className="truncate">Join Newsletter</span>
        </Button>
      </div>
    </header>
  );
}
