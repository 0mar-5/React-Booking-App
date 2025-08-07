import Navbar from "../components/Navbar/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="w-[20%] mx-auto  mt-[4%] ">
        <div>
          <img src="/notFound.svg" alt="not found image" className="w-72" />
        </div>
        <div className=" text-center">
          <h2 className="font-extrabold text-7xl">404</h2>
          <p className="font-bold text-2xl">Page not Fount</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
