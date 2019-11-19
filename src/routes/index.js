import pathUrls from "./pathUrls";
import Login from "../pages/Login";
import FullLayout from "../layouts/FullLayout";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";

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
    path: pathUrls.signup,
    component: Signup,
    layout: FullLayout
  },
  {
    path: pathUrls.dashboard,
    component: Dashboard,
    layout: MainLayout
  },
];

export default routes;
