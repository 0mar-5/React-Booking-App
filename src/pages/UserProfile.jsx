import { useDispatch, useSelector } from "react-redux";
import BookingProfileCard from "../components/BookingProfileCard/BookingProfileCard";
import { useEffect } from "react";
import { loadBookingsFromStorage } from "../store/bookingSlice";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import NoResult from "./NoResult";

function UserProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookingsFromStorage());
  }, [dispatch]);

  const bookings = useSelector((state) => state.booking.bookings);
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  if (!bookings || bookings.length === 0) {
    return (
      <>
        <Navbar />
        <NoResult />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={`m-0auto ${!isCollapsed ? "w-[85%]" : "w-[100%]"}`}>
        <div className="flex justify-center items-start gap-8 px-6 py-10">
          <div className="w-2/4 space-y-4">
            {bookings.map((booking) => (
              <BookingProfileCard key={booking.createdAt} booking={booking} />
            ))}
          </div>

          <div className="w-1/4">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
