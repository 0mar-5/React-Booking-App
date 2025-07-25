import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5].map((i) => {
    if (rating >= i) {
      return <FaStar key={i} className="text-[#3C6097] text-lg" />;
    } else if (rating >= i - 0.5) {
      return <FaStarHalfAlt key={i} className="text-[#3C6097] text-lg" />;
    } else {
      return <FaRegStar key={i} className="text-yellow-500 text-lg" />;
    }
  });

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
