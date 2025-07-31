import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const HotelDetails = lazy(() => import("../pages/HotelDetails"));
const BookingReview = lazy(() => import("../pages/BookingReview"));
const Hotels = lazy(() => import("../pages/Hotels"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/hotelDetails/:id" element={<HotelDetails />} />
      <Route
        path="/bookingReview/:id"
        element={
          <PrivateRoute>
            <BookingReview />
          </PrivateRoute>
        }
      />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/search-results" element={<SearchPage />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
