import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../../network/interceptor";
import RecommendedCard from "../RecommendedCard/RecommendedCard";

function Recommended() {
  const [recHotels, setRecHotels] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axiosInstance.get("/recommended_hotels").then((res) => {
      setRecHotels(res.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        container.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        const { scrollLeft, scrollWidth, clientWidth } = container;
        if (scrollLeft + clientWidth >= scrollWidth - 320) {
          // Reset to start
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center w-[28%]">
        Recommended Hotels
      </h2>

      <div
        className=" mx-auto overflow-x-auto scrollbar-hide pb-4"
        ref={scrollRef}
      >
        <div className="flex gap-6 w-max transition-transform duration-500 ease-in-out">
          {recHotels.map((recHotel) => (
            <div key={recHotel.id} className="min-w-[280px] md:min-w-[300px]">
              <RecommendedCard recHotel={recHotel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommended;
