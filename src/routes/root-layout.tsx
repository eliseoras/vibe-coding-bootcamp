import { NavLink, Outlet } from "react-router-dom";

function NavItem(props: { to: string; label: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        [
          "text-sm font-medium",
          isActive
            ? "underline underline-offset-4"
            : "opacity-80 hover:opacity-100",
        ].join(" ")
      }
      end={props.to === "/"}
    >
      {props.label}
    </NavLink>
  );
}

export function RootLayout() {
  return (
    <div className="min-h-dvh">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <NavLink to="/" className="text-base font-semibold">
            React Starter
          </NavLink>
          <nav className="flex items-center gap-4">
            <NavItem to="/" label="Home" />
            <NavItem to="/tasks" label="Tasks" />
            <NavItem to="/about" label="About" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
