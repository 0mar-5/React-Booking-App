import HotelDetailsCard from "../components/HotelDetailsCard/HotelDetailsCard";
import Navbar from "../components/Navbar/Navbar";
import Recommended from "../components/Recommended/Recommended";

function HotelDetails() {
  return (
    <>
      <Navbar />
      <HotelDetailsCard />
      <div className="w-[75%] mx-auto">
        <Recommended />
      </div>
    </>
  );
}

export default HotelDetails;
