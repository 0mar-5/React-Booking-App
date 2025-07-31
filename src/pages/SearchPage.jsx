import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import HotelCard from "../components/HotelCard/HotelCard";
import NoResult from "./NoResult";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function SearchPage() {
  const { results, loading, error } = useSelector((state) => state.search);
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (results.length === 0) return <NoResult />;

  return (
    <>
      <Navbar />

      <div
        className={`${
          !isCollapsed ? "w-[60%]" : "w-[75%]"
        } m-auto pt-10 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-[3%]`}
      >
        {results.map((hotel) => (
          <div
            key={hotel.id}
            className="transition-transform duration-500 ease-in-out"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
