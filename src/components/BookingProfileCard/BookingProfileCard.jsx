import { Link } from "react-router-dom";
import PopularServiceIcons from "../PopularServiceIcons/PopularServiceIcons";
import { FaStar } from "react-icons/fa6";

function BookingProfileCard({ booking }) {
  const hotel = booking.hotelData;

  return (
    <div className="relative flex bg-white rounded-lg shadow hover:shadow-lg overflow-hidden h-60 md:h-48">
      {/* IMAGE */}
      <div className="relative w-40 min-w-[160px] h-full">
        <Link to={`/hotelDetails/${hotel?.id}`}>
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
          <p className="text-sm text-gray-500">
            {`${hotel?.address?.street}, ${hotel?.address?.city}, ${hotel?.address?.country} `}
          </p>

          {/* Amenities */}
          <PopularServiceIcons amenities={hotel?.amenities.slice(0, 2)} />
        </div>
        <div className="flex">
          <p className=" py-1 font-[11px] text-[#858595]">
            from: {booking?.checkIn}
          </p>
          <p className=" py-1  font-[11px] text-[#858595]">
            To: {booking?.checkOut}
          </p>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-sm  pl-1 font-medium">
            Nights: {booking?.nights} ,
          </p>
          <p className="text-[18px] font-bold text-gray-800 leading-none">
            Total price : ${booking?.totalPrice}
          </p>
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
