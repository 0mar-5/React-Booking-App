function NavItem({ icon, title }) {
  return (
    <li className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/20  cursor-pointer transition-colors">
      <span>{icon}</span>
      <a href="#" className="text-white text-sm">
        {title}
      </a>
    </li>
  );
}

export default NavItem;
