import { useState } from "react";
import { BiSolidHome, BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaEarthAmericas } from "react-icons/fa6";
import { BsQuestionSquareFill } from "react-icons/bs";

function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    { icon: <BiSolidHome size={24} />, label: "Home" },
    { icon: <RiContactsBook3Fill size={24} />, label: "My Bookings" },
    { icon: <FaEarthAmericas size={24} />, label: "Explore" },
    { icon: <BsQuestionSquareFill size={24} />, label: "Support" },
  ];

  return (
    <div
      className={`h-[650px] z-10 flex flex-col justify-between transition-all duration-600 ease-in-out rounded-lg pb-3
 ${collapsed ? "w-16" : "w-56"} text-white
      bg-gradient-to-b from-[#0A69DA] via-[#0856C8] to-[#0231A5]`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg font-serif italic">Booking</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white text-2xl p-1 rounded hover:bg-white/20"
        >
          {collapsed ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-3 py-2 rounded hover:bg-white/20 transition-colors ${
                  collapsed ? "justify-center" : "gap-3"
                }`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {!collapsed && (
        <div className="p-3">
          <button className="w-full bg-white text-blue-800 font-semibold py-2 rounded-3xl hover:bg-gray-100">
            Sign Up Now
          </button>
        </div>
      )}
    </div>
  );
}

export default SidebarComponent;
