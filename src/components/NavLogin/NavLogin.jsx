import { NavLink } from "react-router-dom";

function NavLogin() {
  return (
    <div className="ml-auto">
      <ul className="flex gap-3">
        <li>
          <NavLink to="/login" className="text-white text-lg">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="text-white text-lg">
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLogin;
