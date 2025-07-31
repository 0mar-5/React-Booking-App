import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function NoResult() {
  return (
    <>
      <Navbar />

      <div className="w-[20%] mx-auto  mt-[4%] ">
        <div>
          <img src="./noResult.png" alt="not found image" className="w-72" />
        </div>
        <div className=" text-center">
          <h2 className="font-extrabold text-7xl">404</h2>
          <p className="font-bold text-2xl">No Result Found</p>
          <div className="mt-5">
            <Link
              to="/"
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium cursor-pointer"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoResult;
