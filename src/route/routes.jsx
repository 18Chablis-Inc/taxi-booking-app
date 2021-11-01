import { lazy } from "react";
const Cabs = lazy(() => import("../pages/Cabs"));
const Welcome = lazy(() => import("../pages/Welcome"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: Welcome,
    fallback: Welcome,
  },
  {
    path: "/dashboard",
    exact: true,
    auth: true,
    component: Dashboard,
    fallback: Dashboard,
  },
  {
    path: "/cabs",
    exact: true,
    auth: true,
    component: Cabs,
    fallback: Cabs,
  },
  {
    path: "/login",
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    auth: false,
    component: Register,
  },
];

export default routes;
