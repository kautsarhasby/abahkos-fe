import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import BoardersPage from "../pages/dashboard/BoardersPage";
import UsersPage from "../pages/dashboard/UsersPage";
import PermissionsPage from "../pages/dashboard/PermissionsPage";
import DashboardLayout from "../layouts/Dashboardlayout";

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
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "permissions",
        element: <PermissionsPage />,
      },
      {
        path: "data",
        children: [
          {
            path: "boarders",
            element: <BoardersPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
]);
