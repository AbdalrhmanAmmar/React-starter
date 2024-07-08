import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Navarbottom from "../components/Navbar/Navarbottom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="my-16">
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <Outlet />
        </div>

        <Navarbottom />
      </div>
    </div>
  );
}

export default MainLayout;
