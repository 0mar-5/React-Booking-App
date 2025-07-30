import { useSelector } from "react-redux";
import BestOffers from "../components/BestOffers/BestOffers";
import Navbar from "../components/Navbar/Navbar";
import Recommended from "../components/Recommended/Recommended";

function Home() {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  return (
    <>
      <Navbar />
      <div
        className={`transition-all duration-300 mx-auto ${
          !isCollapsed ? "w-[60%]" : "w-[75%]"
        }`}
      >
        <Recommended />
        <BestOffers />
      </div>
    </>
  );
}

export default Home;
