import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import RoomsPage from "../pages/dashboard/RoomsPage";
import UsersPage from "../pages/dashboard/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "rooms",
        element: <RoomsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);
