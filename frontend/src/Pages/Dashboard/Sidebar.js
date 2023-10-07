import { BiSolidDashboard, BiStats, BiSupport } from "react-icons/bi";
import { GiExpense } from "react-icons/gi";
import { FaMoneyCheck } from "react-icons/fa";

import logoSrc from "../../Components/Images/Group 48098172logo.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex-[1] bg-white px-8 py-6 flex flex-col fixed w-52 z-10 h-full">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={logoSrc} alt="logo" className="w-32" />
        </Link>
      </div>
      <div className="mt-8 space-y-2">
        {routes.map((route) => (
          <Link
            to={route.url}
            key={route.name}
            className="flex items-center gap-4 text-gray-500 hover:text-accent cursor-pointer hover:-translate-x-2 transition-all"
          >
            {route.icon}
            <span>{route.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

const routes = [
  {
    name: "Dashboard",
    url: "/dashboard/home",
    icon: <BiSolidDashboard />,
  },
  {
    name: "investing",
    url: "/dashboard/investing",
    icon: <BiStats />,
  },
  {
    name: "Hire expert",
    url: "/dashboard/hire-expert",
    icon: <GiExpense />,
  },
  {
    name: "Courses",
    url: "/dashboard/courses",
    icon: <FaMoneyCheck />,
  },
  {
    name: "Support",
    url: "/dashboard/support",
    icon: <BiSupport />,
  },
];
