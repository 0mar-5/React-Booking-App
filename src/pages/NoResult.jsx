function NoResult() {
  return (
    <>
      <div className="w-[20%] mx-auto  mt-[4%] ">
        <div>
          <img src="./noResult.png" alt="not found image" className="w-72" />
        </div>
        <div className=" text-center">
          <h2 className="font-extrabold text-7xl">404</h2>
          <p className="font-bold text-2xl">No Result Found</p>
        </div>
      </div>
    </>
  );
}

export default NoResult;
