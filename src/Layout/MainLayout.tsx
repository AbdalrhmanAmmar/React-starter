import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Navarbottom from "../components/Home/Navarbottom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Outlet />
        </div>

        <Navarbottom />
      </div>
    </div>
  );
}

export default MainLayout;
