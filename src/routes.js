import Login from "./Views/Auth/Login";
import UserRegistration from "./Views/Auth/Registration";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import ResetPassword from "./Views/Auth/ResetPassword";

export const authRoutes = [
  {
    name: "login",
    path: "/login",
    layout: "/auth",
    component: Login,
    invisible: true,
  },
  {
    name: "register",
    path: "/register",
    layout: "/auth",
    component: UserRegistration,
    invisible: true,
  },
  {
    name: "forgot-password",
    path: "/forgot-password",
    layout: "/auth",
    component: ForgotPassword,
    invisible: true,
  },
  {
    name: "reset-password",
    path: "/reset-password/:token/:hash",
    layout: "/auth",
    component: ResetPassword,
    invisible: true,
  },
];
