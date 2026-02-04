import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HomeRoute() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Starter Template</h1>
        <p className="max-w-prose text-sm opacity-80">
          React 19 + TypeScript + React Router v7 + Vite + Tailwind v4 +
          shadcn/ui. Convex is optional and can be added later.
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>What’s Included</CardTitle>
          <CardDescription>
            CI, linting, typechecking, and unit tests are ready.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm opacity-90">
            <li>GitHub Actions: lint, typecheck, test, build</li>
            <li>Husky: pre-commit + pre-push guardrails</li>
            <li>Vitest + React Testing Library</li>
          </ul>
        </CardContent>
        <CardFooter className="gap-3">
          <Button asChild>
            <Link to="/about">About this template</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              React Router docs
            </a>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
