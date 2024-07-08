import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../Pages/LoginPage";
import Blogs from "../Pages/Blogs";
import Regsiter from "../Pages/Regsiter";
import UserDashboardLayout from "../Layout/UserDashboardLayout";
import PublicProfilePages from "../Pages/PublicProfilePages";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Regsiter" element={<Regsiter />} />
      </Route>

      <Route path="/user" element={<UserDashboardLayout />}>
        <Route path="setting" element={<PublicProfilePages />} />
      </Route>
    </>
  )
);

export default router;
