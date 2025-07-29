import { FaStar } from "react-icons/fa";
import PopularServiceIcons from "../PopularServiceIcons/PopularServiceIcons";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="relative flex bg-white rounded-lg shadow hover:shadow-lg overflow-hidden h-60 md:h-48">
      {/* IMAGE */}
      <div className="relative w-40 min-w-[160px] h-full">
        <Link to={`/hotelDetails/${hotel.id}`}>
          <img
            src={hotel?.images?.main}
            alt="hotel"
            className="object-cover w-full h-full"
          />
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* top part */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-tight text-gray-900 w-[80%]">
            {hotel?.name}
          </h3>
          <p className="text-sm text-gray-500">{hotel?.address?.street}</p>

          {/* Amenities */}
          <PopularServiceIcons amenities={hotel.amenities.slice(0, 2)} />
        </div>

        {/* bottom part */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-end gap-1">
            {hotel?.pricing[0]?.discount && (
              <p className="text-sm text-orange-500 font-medium">
                {hotel?.pricing[0]?.discount}
              </p>
            )}
            <p className="text-xl font-bold text-gray-800 leading-none">
              ${hotel?.pricing[0]?.originalPrice}
            </p>
          </div>
          <div className="flex gap-2">
            <Link to={`/hotelDetails/${hotel.id}`}>
              <button className="px-3 py-2 border rounded-md text-sm font-medium hover:bg-gray-100">
                View
              </button>
            </Link>
            <Link to={`/bookingReview/${hotel.id}`}>
              <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium">
                Book
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
        {hotel?.rating?.score}
        <FaStar className="text-white w-3 h-3" />
      </div>
    </div>
  );
}

export default HotelCard;
