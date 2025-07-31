import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";

function UserNav() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="ml-auto">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#00296B] text-white py-2 px-4 rounded-full focus:outline-none cursor-pointer"
      >
        <FaUserLarge />
        <span className="text-sm font-medium">{user?.userName}</span>
        <FaChevronDown className="text-xs" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10">
          <ul className="py-2">
            <li>
              <Link to="/userProfile">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </button>
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserNav;
