import {
  FaHome,
  FaDollarSign,
  FaChartBar,
  FaDesktop,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navarbottom() {
  const navbarLinkbottom = [
    { name: "Home", href: "/", icons: <FaHome /> },
    { name: "Tags", href: "/Tags", icons: <FaDollarSign /> },
    { name: "Single Tag", href: "/Single-Tag", icons: <FaChartBar /> },
    { name: "Blogs", href: "/Blogs", icons: <FaDesktop /> },
    { name: "Single Blog", href: "/Single-Blog", icons: <FaRocket /> },
    { name: "Dashboard", href: "/Dashboard", icons: <FaTerminal /> },
  ];

  return (
    <nav className="app__bottom-bar w-full bg-white fixed bottom-0 py-4 rounded-tr-xl rounded-tl-xl px-6 z-99 shadow-2xl md:hidden border-[1px] border-t-slate-100">
      <div className="flex justify-between items-center">
        {navbarLinkbottom.map((items, idx) => (
          <NavLink
            key={idx}
            to={items.href}
            className="flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease"
          >
            {items.icons}
            <span className="text-xs">{items.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navarbottom;
