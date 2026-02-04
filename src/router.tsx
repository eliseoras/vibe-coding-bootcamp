import { createBrowserRouter } from "react-router-dom";

import { AboutRoute } from "@/routes/about";
import { HomeRoute } from "@/routes/home";
import { NotFoundRoute } from "@/routes/not-found";
import { RootError } from "@/routes/root-error";
import { RootLayout } from "@/routes/root-layout";
import { TasksRoute } from "@/routes/tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    ErrorBoundary: RootError,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: "about", element: <AboutRoute /> },
      { path: "tasks", element: <TasksRoute /> },
      { path: "*", element: <NotFoundRoute /> },
    ],
  },
]);
