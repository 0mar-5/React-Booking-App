function NavItem({ icon, title }) {
  return (
    <li>
      <span>{icon}</span>
      <a href="#">{title}</a>
    </li>
  );
}

export default NavItem;
