import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../network/interceptor";

function BookingSummary({ setSummaryData }) {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end - start;
      const diffDays = Math.max(diffTime / (1000 * 60 * 60 * 24), 0);
      setNights(diffDays);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  const totalPrice = nights * (hotel?.pricing[0]?.originalPrice || 0);

  useEffect(() => {
    axiosInstance.get(`/hotels/${id}`).then((res) => {
      setHotel(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (hotel && checkIn && checkOut && nights > 0) {
      setSummaryData?.({
        hotelData: hotel,
        pricePerNight: hotel.pricing[0]?.originalPrice,
        discount: hotel.pricing[0]?.discount,
        checkIn,
        checkOut,
        nights,
        totalPrice,
      });
    } else {
      setSummaryData?.(null);
    }
  }, [hotel, checkIn, checkOut, nights, totalPrice, setSummaryData]);

  return (
    <div className="max-w-xs bg-white rounded-lg shadow p-4 space-y-4">
      <h2 className="text-lg font-bold">Summary</h2>

      <img
        src={hotel?.images?.main}
        alt="Hotel image"
        className="w-full h-40 object-cover rounded-md"
      />

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <div className="text-sm font-medium leading-tight pr-4">
            {hotel?.name}
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <FaMapMarkerAlt className="mr-1" />
              {hotel?.address?.street}
            </div>
          </div>
          <div className="text-right">
            <span className="text-red-500 font-semibold text-sm">
              {hotel?.pricing[0]?.discount}
            </span>
            <div className="text-xl font-bold">
              {hotel?.pricing[0]?.originalPrice}
            </div>
            <span className="text-xs text-gray-500">USD</span>
            <div className="text-[10px] text-gray-400">Per night</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            required
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            required
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 text-sm"
          />
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Price Per Night</span>
          <span className="font-medium">
            ${hotel?.pricing[0]?.originalPrice || 0}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Nights</span>
          <span className="font-medium">{nights}</span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
