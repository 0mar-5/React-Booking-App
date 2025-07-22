import { MdHotel } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { MdLocalTaxi } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";

import NavItem from "../navItem/NavItem";

function MainNav() {
  return (
    <ul className="flex justify-center items-center gap-6 absolute top-[63%] right-[45%] [justify-self:anchor-center] pl-[2rem]">
      <NavItem title="hotel" icon={<MdHotel size={24} color="white" />} />
      <NavItem title="villa" icon={<IoHomeSharp size={24} color="white" />} />
      <NavItem title="taxi" icon={<MdLocalTaxi size={24} color="white" />} />
      <NavItem
        title="flights"
        icon={<GiAirplaneDeparture size={24} color="white" />}
      />
    </ul>
  );
}

export default MainNav;
