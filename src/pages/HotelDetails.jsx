import { useEffect, useState } from "react";
import { axiosInstance } from "../network/interceptor";
import { useParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaParking, FaWifi } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import PopularServiceIcons from "../components/PopularServiceIcons/PopularServiceIcons";
import StarRating from "../components/StarRating/StarRating";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [hotel.images?.main, ...(hotel.images?.gallery || [])].filter(
    Boolean
  );

  useEffect(() => {
    axiosInstance.get(`/hotels/${id}`).then((res) => {
      setHotel(res.data);
    });
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-4">
      <div className="max-w-6xl mt-[2%] mx-auto rounded-md p-4 bg-white">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{hotel?.name}</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt="hotel"
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-md"
              />
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
              >
                <FaAngleLeft size={20} />
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
              >
                <FaAngleRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-[2%] left-[17%] flex gap-2 mt-3 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-16 w-20 object-cover rounded-md cursor-pointer border-2 ${
                    currentIndex === i
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 space-y-4">
            {/* Rating and Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-md font-medium">
                  {hotel?.rating?.score}
                </span>
                <span className="text-gray-500 text-sm">
                  {hotel?.rating?.status}
                </span>
                <span className="text-gray-400 text-sm">
                  ({hotel?.rating?.reviewCount} Review)
                </span>
                <StarRating rating={hotel?.rating?.score} />
              </div>
              <div className="text-right flex flex-col items-start">
                <p className="text-red-600 font-bold text-sm">
                  {hotel?.pricing?.[0]?.discount}
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {hotel?.pricing?.[0]?.originalPrice}
                  <span className="text-sm font-normal text-gray-500 ml-1">
                    {hotel?.pricing?.[0]?.currency}
                  </span>
                </p>
                <p className="text-gray-400 text-xs">
                  {hotel?.pricing?.[0]?.priceUnit}
                </p>
              </div>
            </div>

            {/* About */}
            <div>
              <h4 className="text-lg font-semibold mb-1">About</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {hotel?.description}
              </p>
              <button className="text-blue-600 text-sm font-medium mt-1">
                Show More
              </button>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <PiMapPinFill className=" text-blue-500" />
              <span>
                {`${hotel?.address?.street}, ${hotel?.address?.city}, ${hotel?.address?.country} `}
              </span>
            </div>

            {/* Popular Services */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">
                Popular Service
              </h5>
              <PopularServiceIcons amenities={hotel?.amenities} />
            </div>

            <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md mt-4">
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
