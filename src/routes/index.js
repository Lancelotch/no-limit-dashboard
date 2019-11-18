import pathUrls from "./pathUrls";
import Login from "../pages/Login";
import FullLayout from "../layouts/FullLayout";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

const routes = [
  {
    path: pathUrls.login,
    component: Login,
    layout: FullLayout
  },
  {
    path: pathUrls.forgotPassword,
    component: ForgotPassword,
    layout: FullLayout
  },
  {
    path: pathUrls.register,
    component: Register,
    layout: FullLayout
  },
  {
    path: pathUrls.dashboard,
    component: Dashboard,
    layout: MainLayout
  },
];

export default routes;
