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
    {
      icon: <RiContactsBook3Fill size={24} />,
      label: "My Bookings",
      to: "/userProfile",
    },
    { icon: <FaEarthAmericas size={24} />, label: "Explore", to: "/hotels" },
    {
      icon: <BsQuestionSquareFill size={24} />,
      label: "Support",
      to: "/support",
    },
  ];

  return (
    <>
      {/* Toggle Button - small and medium screens only */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-white text-2xl p-2 rounded bg-blue-800 hover:bg-blue-900"
        >
          {isCollapsed ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </button>
      </div>

      <aside
        className={`z-10 flex flex-col transition-all duration-500 ease-in-out rounded-lg pb-3 text-white
        bg-gradient-to-b from-[#0A69DA] via-[#0856C8] to-[#0231A5]
        fixed top-0 left-0 h-full
        ${isCollapsed ? "hidden" : "flex"}
        ${isCollapsed ? "lg:w-16 md:w-16" : "w-full md:w-56 lg:w-56"}
        lg:relative lg:flex lg:h-[650px]`}
      >
        {/* Header */}
        <div className="flex items-end justify-end md:justify-between p-4">
          {!isCollapsed && (
            <NavLink to="/" className="font-bold text-lg font-serif italic">
              Booking
            </NavLink>
          )}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:block text-white text-2xl p-1 rounded hover:bg-white/20 cursor-pointer"
          >
            {isCollapsed ? <BiMenuAltLeft /> : <BiMenuAltRight />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded transition-colors ${
                      isCollapsed ? "justify-center" : "gap-3"
                    } ${
                      isActive
                        ? "bg-white/30 font-semibold"
                        : "hover:bg-white/20"
                    }`
                  }
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sign Up Button */}
        {!isCollapsed && !isLoggedIn && (
          <div className="mt-auto p-3 w-full">
            <Link to="/signup" className="block w-full">
              <button className="w-full bg-white text-blue-800 font-semibold py-2 rounded-3xl hover:bg-gray-100 cursor-pointer">
                Sign Up Now
              </button>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

export default SidebarComponent;
