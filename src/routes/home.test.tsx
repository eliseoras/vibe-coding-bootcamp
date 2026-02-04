import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { HomeRoute } from "@/routes/home";

test("renders starter heading", () => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
  ]);

  render(<RouterProvider router={router} />);
  expect(
    screen.getByRole("heading", { name: /starter template/i }),
  ).toBeInTheDocument();
});
