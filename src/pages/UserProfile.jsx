import { useDispatch, useSelector } from "react-redux";
import BookingProfileCard from "../components/BookingProfileCard/BookingProfileCard";
import { useEffect } from "react";
import { loadBookingsFromStorage } from "../store/bookingSlice";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";

function UserProfile() {
  const dispatch = useDispatch();
  // const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  useEffect(() => {
    dispatch(loadBookingsFromStorage());
  }, [dispatch]);

  const bookings = useSelector((state) => state.booking.bookings);

  if (!bookings || bookings.length === 0) {
    return (
      <>
        <Navbar />
        <p className="text-center text-gray-500 mt-10">No bookings found.</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start gap-8 px-6 py-10">
        {/* Booking Cards Section */}
        <div className="w-2/4 space-y-4">
          {bookings.map((hotel) => (
            <BookingProfileCard key={hotel.createdAt} hotel={hotel} />
          ))}
        </div>

        {/* Profile Card Section */}
        <div className="w-1/4">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
