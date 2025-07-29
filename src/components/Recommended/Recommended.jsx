import { useEffect, useState } from "react";
import { axiosInstance } from "../../network/interceptor";
import RecommendedCard from "../RecommendedCard/RecommendedCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Recommended() {
  const [recHotels, setRecHotels] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axiosInstance.get("/recommended_hotels").then((res) => {
      setRecHotels(res.data);
    });
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(recHotels.length - 1, 0) : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 >= recHotels.length ? 0 : prev + 1));
  };

  const visibleCards = recHotels.slice(startIndex, startIndex + 2);

  return (
    <div className="pt-24 pb-16">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center w-fit ml-[20%] ">
        Recommended Hotels
      </h2>

      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="
            absolute
            right-[80%]
            bg-white shadow rounded-full p-2
            hover:bg-gray-100 transition-colors cursor-pointer
          "
        >
          <IoChevronBack size={24} />
        </button>

        <div className="flex gap-6 px-8">
          {visibleCards.map((recHotel) => (
            <div
              key={recHotel.id}
              className="min-w-[280px] md:min-w-[300px] transition-transform duration-500 ease-in-out"
            >
              <RecommendedCard recHotel={recHotel} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="
            absolute
            left-[80%]
           bg-white shadow rounded-full p-2
            hover:bg-gray-100 transition-colors cursor-pointer
          "
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    </div>
  );
}

export default Recommended;
