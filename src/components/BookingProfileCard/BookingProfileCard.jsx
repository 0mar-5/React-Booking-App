import { Link } from "react-router-dom";
import PopularServiceIcons from "../PopularServiceIcons/PopularServiceIcons";
import { FaStar } from "react-icons/fa6";

function BookingProfileCard({ hotel }) {
  return (
    <div className="relative flex bg-white rounded-lg shadow hover:shadow-lg overflow-hidden h-60 md:h-48">
      {/* IMAGE */}
      <div className="relative w-40 min-w-[160px] h-full">
        <Link to={`/hotelDetails/${hotel.id}`}>
          <img
            src={hotel?.image}
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
            {hotel?.hotelName}
          </h3>
          <p className="text-sm text-gray-500">{hotel?.address}</p>

          {/* Amenities */}
          {/* <PopularServiceIcons amenities={hotel?.amenities?.slice(0, 2)} /> */}
        </div>

        {/* bottom part */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-end gap-1">
            {hotel?.discount && (
              <p className="text-sm text-orange-500 font-medium">
                {hotel?.discount}
              </p>
            )}
            <p className="text-xl font-bold text-gray-800 leading-none">
              ${hotel?.totalPrice}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="px-3 py-2 ">from: {hotel?.checkIn}</p>
            <p className="px-3 py-2  ">To: {hotel?.checkOut}</p>
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

export default BookingProfileCard;
