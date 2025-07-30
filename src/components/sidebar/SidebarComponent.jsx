import { BiSolidHome, BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaEarthAmericas } from "react-icons/fa6";
import { BsQuestionSquareFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sidebarSlice";

function SidebarComponent() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  const navItems = [
    { icon: <BiSolidHome size={24} />, label: "Home", to: "/" },
    { icon: <RiContactsBook3Fill size={24} />, label: "My Bookings", to: "" },
    { icon: <FaEarthAmericas size={24} />, label: "Explore", to: "/hotels" },
    { icon: <BsQuestionSquareFill size={24} />, label: "Support", to: "" },
  ];

  return (
    <aside
      className={`absolute h-[650px] z-10 flex flex-col justify-between transition-all duration-600 ease-in-out rounded-lg pb-3
 ${isCollapsed ? "w-16" : "w-56"} text-white
      bg-gradient-to-b from-[#0A69DA] via-[#0856C8] to-[#0231A5]`}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <NavLink to="/" className="font-bold text-lg font-serif italic">
              Booking
            </NavLink>
          </div>
        )}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-white text-2xl p-1 rounded hover:bg-white/20"
        >
          {isCollapsed ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={`flex items-center px-3 py-2 rounded hover:bg-white/20 transition-colors ${
                  isCollapsed ? "justify-center" : "gap-3"
                }`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {!isCollapsed && !isLoggedIn && (
        <Link to="/signup" className="p-3">
          <button className="w-full bg-white text-blue-800 font-semibold py-2 rounded-3xl hover:bg-gray-100">
            Sign Up Now
          </button>
        </Link>
      )}
    </aside>
  );
}

export default SidebarComponent;
