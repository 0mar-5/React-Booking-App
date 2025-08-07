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
  const [selectedRoomType, setSelectedRoomType] = useState("single");
  const today = new Date().toISOString().split("T")[0];

  const selectedPricing = hotel?.pricing.find(
    (room) => room.roomType === selectedRoomType
  );

  const pricePerNight = selectedPricing?.originalPrice || 0;
  const totalPrice = nights * pricePerNight;

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

  useEffect(() => {
    axiosInstance.get(`/hotels/${id}`).then((res) => {
      setHotel(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (hotel && checkIn && checkOut && nights > 0) {
      setSummaryData?.({
        hotelData: hotel,
        pricePerNight,
        discount: selectedPricing?.discount,
        roomType: selectedRoomType,
        checkIn,
        checkOut,
        nights,
        totalPrice,
      });
    } else {
      setSummaryData?.(null);
    }
  }, [
    hotel,
    checkIn,
    checkOut,
    nights,
    totalPrice,
    selectedRoomType,
    selectedPricing,
    setSummaryData,
    pricePerNight,
  ]);

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
          <div className="text-sm font-medium leading-tight pr-4 w-[79%]">
            <h3 className="pl-1 pb-2">{hotel?.name}</h3>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <FaMapMarkerAlt className="mr-1 text-blue-700" />
              {hotel?.address?.street},{hotel?.address?.city}
            </div>
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold text-sm">
              {selectedPricing?.discount}
            </span>
            <div className="text-xl font-bold">${pricePerNight}</div>
            <span className="text-xs text-gray-500">USD</span>
            <div className="text-[10px] text-gray-400">Per night</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Room Type
          </label>
          <select
            value={selectedRoomType}
            onChange={(e) => setSelectedRoomType(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 text-sm"
          >
            {hotel?.pricing.map((room) => (
              <option key={room.roomType} value={room.roomType}>
                {room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            min={today}
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
            min={checkIn || today}
            required
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 text-sm"
          />
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Price Per Night</span>
          <span className="font-medium">${pricePerNight}</span>
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
