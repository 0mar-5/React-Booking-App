import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard/HotelCard";
import { axiosInstance } from "../network/interceptor";
import Navbar from "../components/Navbar/Navbar";

function Hotels() {
  const [Hotels, setHotels] = useState([]);

  useEffect(() => {
    axiosInstance.get("/hotels").then((res) => {
      setHotels(res.data);
    });
  }, []);
  return (
    <>
      <Navbar />

      <div className="max-w-[960px] m-auto pt-10 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-[3%]">
        {Hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="transition-transform duration-500 ease-in-out"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Hotels;
