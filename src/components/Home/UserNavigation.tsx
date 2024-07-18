import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CookiesService from "../../service/Cookies";
import toast from "react-hot-toast";

function UserNavigation({ token }) {
  const cookiesService = new CookiesService();

  const onLogoutHandler = () => {
    cookiesService.remove("userCredentials");
    location.replace("/signin");
    toast(`Good bye ${token.user.username}`, {
      icon: "👏",
    });
  };

  return (
    <div className="absolute right-0 z-50">
      <div className="bg-white absolute right-0 border border-gray-50 w-60 overflow-hidden duration-200">
        <Link
          to="editor"
          className="flex gap-2 link md:hidden pl-8 py-4 items-center"
        >
          <TfiWrite size={15} />
          <p>Write</p>
        </Link>
        <Link
          to="user"
          className="flex gap-2 link md:hidden pl-8 py-4 items-center"
        >
          <TfiWrite size={10} />
          <p>Write</p>
        </Link>
        <Link
          to="profile"
          className="flex gap-2 link md:hidden pl-8 py-4 items-center"
        >
          <CgProfile size={15} />

          <p>profile</p>
        </Link>
        <Link
          to="dashboard"
          className="flex gap-2 link md:hidden pl-8 py-4 items-center"
        >
          <RxDashboard size={15} />

          <p>dashboard</p>
        </Link>

        <span className="absolute border-t border-grey w-[100%]"></span>
        <button
          onClick={onLogoutHandler}
          className="flex gap-2 link md:hidden pl-8 py-4 items-center"
        >
          <HiOutlineLogout size={15} />

          <div className="flex flex-col items-start">
            <p className="font-bold text-xl text-black">Logout</p>
            <span>{token.user.username}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserNavigation;
