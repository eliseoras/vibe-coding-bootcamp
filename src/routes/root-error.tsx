import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function formatUnknownError(err: unknown): string {
  if (err instanceof Error) return err.stack ?? err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err, null, 2);
  } catch {
    return "Unknown error";
  }
}

export function RootError() {
  const err: unknown = useRouteError();

  if (isRouteErrorResponse(err)) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-xl font-semibold">Route Error</h1>
        <p className="mt-2 text-sm opacity-80">
          {err.status} {err.statusText}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-xl font-semibold">Unexpected Error</h1>
      <pre className="mt-4 overflow-auto rounded-md border p-4 text-xs">
        {formatUnknownError(err)}
      </pre>
    </div>
  );
}
