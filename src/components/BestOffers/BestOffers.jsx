import { useEffect, useState } from "react";
import { axiosInstance } from "../../network/interceptor";
import BestOffersCard from "../BestOffersCard/BestOffersCard";

function BestOffers() {
  const [bestOffers, setBestOffers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/best_offer").then((res) => {
      setBestOffers(res.data);
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-auto w-[68%]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Best Offer</h3>
        <p className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700">
          View all
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {bestOffers.map((bestOffer) => (
          <BestOffersCard key={bestOffer.id} bestOffer={bestOffer} />
        ))}
      </div>
    </div>
  );
}

export default BestOffers;
