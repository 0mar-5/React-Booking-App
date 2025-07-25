import { Link } from "react-router-dom";

function BestOffersCard({ bestOffer }) {
  return (
    <Link to={`/hotelDetails/${bestOffer?.id}`}>
      <div
        className="
      flex items-center gap-3
      bg-gray-100 rounded-full
      px-4 py-2
      hover:shadow-md transition-shadow duration-200
      cursor-pointer
    "
      >
        <img
          src={bestOffer?.image}
          alt={bestOffer?.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-800">{bestOffer?.name}</h3>
          <p className="text-xs text-gray-500">{bestOffer?.location}</p>
        </div>
      </div>
    </Link>
  );
}

export default BestOffersCard;
