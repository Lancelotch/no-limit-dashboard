import pathUrls from "./pathUrls";
import Login from "../pages/Login";
import FullLayout from "../layouts/FullLayout";
import MainLayout from "../layouts/MainLayout";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import VerifyAccount from "../pages/VerifyAccount";
import ConnectSocialMedia from "../pages/ConnectSocialMedia";
import Performance from "../pages/Performance";

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
    path: pathUrls.verifyAccount,
    component: VerifyAccount,
    layout: FullLayout
  },
  {
    path: pathUrls.connectSocialMedia,
    component: ConnectSocialMedia,
    layout: FullLayout
  },
  {
    path: pathUrls.performance,
    component: Performance,
    layout: MainLayout
  }
];

export default routes;
