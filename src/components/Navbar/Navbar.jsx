import MainNav from "../MainNav/MainNav";
import NavLogin from "../NavLogin/NavLogin";
import SearchBar from "../SearchBar/SearchBar";
import SidebarComponent from "../sidebar/SidebarComponent";
import UserNav from "../UserNav/UserNav";
import { useSelector } from "react-redux";
import QuickNavigation from "../QuickNavigation/QuickNavigation";

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  return (
    <header
      className={` w-full bg-cover bg-center relative mb-[7%] ${
        isLoggedIn
          ? "bg-[url('/Small-bg.png')] h-40"
          : "bg-[url('/HeaderBG.svg')] h-80"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between pt-8">
          <SidebarComponent />
          {isLoggedIn ? <UserNav /> : <NavLogin />}
          <MainNav />
        </div>
      </div>
      <SearchBar
        width={isCollapsed ? "w-[75%]" : "w-[65%]"}
        isCollapsed={isCollapsed}
      />
      <QuickNavigation width={isCollapsed ? "w-[75%]" : "w-[65%]"} />
    </header>
  );
}

export default Navbar;
