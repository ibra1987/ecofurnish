import { Navlink } from "@/types/app";

export const NAVLINKS: Navlink[] = [
  {
    name: "Home",
    path: "/",
    protected: false,
  },
  {
    name: "Sell your furniture",
    path: "/inside/add-listing",
    protected: false,
  },
  {
    name: "Login",
    path: "/users/login",
    protected: false,
  },
  {
    name: "Register",
    path: "/users/register",
    protected: false,
  },
  {
    name: "dashboard",
    path: "/inside/dashboard",
    protected: true,
  },
];
