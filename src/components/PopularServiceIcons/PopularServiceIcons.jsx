import {
  FaParking,
  FaWifi,
  FaDog,
  FaBicycle,
  FaHotTub,
  FaBuilding,
  FaMountain,
} from "react-icons/fa";
import {
  MdKitchen,
  MdLocalLaundryService,
  MdBalcony,
  MdEco,
} from "react-icons/md";
import {
  GiMusicalNotes,
  GiSkiBoot,
  GiMountainCave,
  GiCctvCamera,
} from "react-icons/gi";
import { IoIosRestaurant, IoIosBusiness } from "react-icons/io";
import { TbBeach, TbView360, TbBuildingStore } from "react-icons/tb";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { GiSurfBoard } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { BiSolidSlideshow } from "react-icons/bi";

import { LuMusic } from "react-icons/lu";
import { IoIosGlobe } from "react-icons/io";

function PopularServiceIcons({ amenities }) {
  const amenityIcons = {
    wifi: <FaWifi />,
    parking: <FaParking />,
    "valet parking": <FaParking />,
    "surfboard rental": <GiSurfBoard />,
    kitchen: <MdKitchen />,
    laundry: <MdLocalLaundryService />,
    "business center": <IoIosBusiness />,
    "beach access": <TbBeach />,
    "pet friendly": <FaDog />,
    "bike rental": <FaBicycle />,
    "hot tub": <FaHotTub />,
    "balcony rooms": <MdBalcony />,
    "eco-friendly": <MdEco />,
    "rooftop bar": <TbBuildingStore />,
    "tennis court": <MdOutlineSportsTennis />,
    "fitness center": <FaBuilding />,
    "waterfront views": <TbBeach />,
    "mountain views": <FaMountain />,
    "ski storage": <GiSkiBoot />,
    "live music": <GiMusicalNotes />,
    "live country music": <LuMusic />,
    "honky tonk access": <GiMusicalNotes />,
    "southern breakfast": <IoIosRestaurant />,
    "organic restaurant": <IoIosRestaurant />,
    "seafood restaurant": <IoIosRestaurant />,
    "creole cuisine": <IoIosRestaurant />,
    "jazz club": <GiMusicalNotes />,
    "cctv cameras": <GiCctvCamera />,
    "beachfront restaurant": <MdTableRestaurant />,
    "multiple restaurants": <MdTableRestaurant />,
    pool: <MdPool />,
    shows: <BiSolidSlideshow />,
  };

  const defaultIcon = <IoIosGlobe />;

  return (
    <div className="flex items-center gap-4 text-gray-600 text-sm flex-wrap mt-4">
      {amenities?.map((amenity, index) => {
        const key = amenity.toLowerCase().trim();
        return (
          <span key={index} className="flex items-center gap-1">
            {amenityIcons[key] || defaultIcon}
            {amenity}
          </span>
        );
      })}
    </div>
  );
}

export default PopularServiceIcons;
