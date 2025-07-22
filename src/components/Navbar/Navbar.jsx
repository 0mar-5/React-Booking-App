import MainNav from "../MainNav/MainNav";
import NavLogin from "../NavLogin/NavLogin";
import SearchBar from "../SearchBar/SearchBar";
import SidebarComponent from "../sidebar/SidebarComponent";

function Navbar() {
  return (
    <header className="h-80 w-full bg-[url('/HeaderBG.svg')] bg-cover bg-center relative">
      <div className="container-custom">
        <div className="flex justify-between pt-8">
          <SidebarComponent />
          <NavLogin />
          <MainNav />
        </div>
      </div>
      <SearchBar />
    </header>
  );
}

export default Navbar;
