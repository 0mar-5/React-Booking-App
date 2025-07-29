import { useState } from "react";
import MainNav from "../MainNav/MainNav";
import NavLogin from "../NavLogin/NavLogin";
import SearchBar from "../SearchBar/SearchBar";
import SidebarComponent from "../sidebar/SidebarComponent";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header className="h-80 w-full bg-[url('/HeaderBG.svg')] bg-cover bg-center relative">
      <div className="container-custom">
        <div className="flex justify-between pt-8">
          <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <NavLogin />
          <MainNav />
        </div>
      </div>
      <SearchBar collapsed={collapsed} />
    </header>
  );
}

export default Navbar;
