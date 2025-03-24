import {
  Database,
  Gauge,
  KeyRound,
  LogOut,
  MapPinHouse,
  Settings,
  User,
  Users,
} from "lucide-react";

const NavigationSidebar = [
  { name: "Dashboard", icon: Gauge, url: "/dashboard" },
  { name: "Permissions", icon: KeyRound, url: "/dashboard/permissions" },
  {
    name: "Data",
    icon: Database,
    url: "",
    data: [
      {
        name: "Boarders",
        icon: MapPinHouse,
        url: "/dashboard/data/boarders",
      },
      { name: "Users", icon: Users, url: "/dashboard/data/users" },
    ],
  },
];

const ToolsSideBar = [
  {
    name: "Profile",
    icon: User,
    url: "/dashboard/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    url: "/dashboard/settings",
  },
  {
    name: "Log out",
    icon: LogOut,
    url: "/",
  },
];

export const DefaultMetadata = {
  NavigationSidebar,
  ToolsSideBar,
};
