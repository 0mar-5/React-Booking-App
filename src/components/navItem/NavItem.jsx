import { NavLink } from "react-router-dom";

function NavItem({ icon, title, to }) {
  return (
    <li className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/20  cursor-pointer transition-colors">
      <NavLink
        to={to}
        className="text-white text-sm flex flex-col align-middle gap-0.5 "
      >
        <span>{icon}</span>
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
