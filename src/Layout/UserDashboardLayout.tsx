import { Outlet } from "react-router-dom";
import AsideProfile from "../components/userDashboard/AsideProfile";

function UserDashboardLayout() {
  return (
    <div>
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <AsideProfile />
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardLayout;
