import { createBrowserRouter } from "react-router-dom";

import { AboutRoute } from "@/routes/about";
import { HomeRoute } from "@/routes/home";
import { GearCategoryRoute } from "@/routes/gear-category"; // Import the new route
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
      { path: "gear/:category", element: <GearCategoryRoute /> }, // Add dynamic gear route
      // Fallback for demo purposes if they just go to /gear
      { path: "gear", element: <GearCategoryRoute /> },
      { path: "guides", element: <GearCategoryRoute /> },
      { path: "tasks", element: <TasksRoute /> },
      { path: "*", element: <NotFoundRoute /> },
    ],
  },
]);
