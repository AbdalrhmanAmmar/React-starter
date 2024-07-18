import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import CookiesService from "../../service/Cookies";
import { GoBell } from "react-icons/go";
import UserNavigation from "./UserNavigation";

function Navbar() {
  const [seacrhvisbility, setseacrhvisbility] = useState<boolean>(false);
  const cookiesService = new CookiesService();
  const token = cookiesService.get("userCredentials");

  const [userNavPanel, setuserNavPanel] = useState(false);

  const handleUserNavigation = () => {
    setuserNavPanel((prev) => !prev);
  };

  const onBlurhandleUserNavigation = () => {
    setTimeout(() => {
      setuserNavPanel(false);
    }, 200);
  };

  console.log(token);

  return (
    <nav className="navbar ">
      <Link to="/">
        <img className="flex-none w-10" src={logo} alt="logo" />
      </Link>

      <div
        className={
          "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:w-auto md:show " +
          (seacrhvisbility ? "show" : "hide")
        }
      >
        <input
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12 "
          type="text"
          placeholder="search"
        />
        <span className="absolute right-[10%] md:pointer-events-none  md:left-10 top-1/2 -translate-y-1/2 ">
          <CiSearch className="text-2xl text-dark-grey" />
        </span>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          onClick={() => setseacrhvisbility((prev) => !prev)}
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
        >
          <CiSearch className="text-xl text-dark-grey" />
        </button>
        <Link className="hidden md:flex gap-2 items-center" to="write">
          <TfiWrite size={25} />
          write
        </Link>

        {token ? (
          <>
            <Link to="/dashboard/notification">
              <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                <span className="flex justify-center">
                  <GoBell className="text-2xl" />
                </span>
              </button>
            </Link>

            <div
              className="relative"
              onClick={handleUserNavigation}
              onBlur={onBlurhandleUserNavigation}
            >
              <button className="w-12 h-12 mt-1">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src=""
                  alt=""
                />
              </button>
              {userNavPanel ? <UserNavigation token={token} /> : ""}
            </div>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn-dark py-2">
              Login
            </Link>
            <Link to="/signup" className="btn-light py-2 hidden md:block">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
