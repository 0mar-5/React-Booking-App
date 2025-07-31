import { useSelector } from "react-redux";
import HotelDetailsCard from "../components/HotelDetailsCard/HotelDetailsCard";
import Navbar from "../components/Navbar/Navbar";
import Recommended from "../components/Recommended/Recommended";

function HotelDetails() {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  return (
    <>
      <Navbar />
      <div className={`mx-auto ${!isCollapsed ? "w-[65%]" : "w-[75%]"}`}>
        <HotelDetailsCard />
      </div>
      <div className="w-[75%] mx-auto">
        <Recommended />
      </div>
    </>
  );
}

export default HotelDetails;
