import { NavLink } from "react-router-dom";

function NavItem({ icon, title, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 p-2 rounded transition-colors ${
          isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
        }`
      }
    >
      <span>{icon}</span>
      <span className="text-sm">{title}</span>
    </NavLink>
  );
}

export default NavItem;
