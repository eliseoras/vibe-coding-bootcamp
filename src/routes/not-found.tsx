import { Link } from "react-router-dom";

export function NotFoundRoute() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Not Found</h1>
      <Link to="/" className="text-sm underline underline-offset-4">
        Go home
      </Link>
    </section>
  );
}
