function QuickNavigation({ width }) {
  return (
    <div
      className={`${width} bg-[#f9fafb] px-6 py-3 rounded-md shadow-sm  mx-auto mt-[11%] transition-all duration-400`}
    >
      <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
        <span>Hotels</span>
        <span className="text-gray-400 font-normal">|</span>
        <span className="text-gray-500 font-normal">
          Total
          <a href="#" className="text-blue-600 hover:underline">
            126 result
          </a>
        </span>
      </h2>
    </div>
  );
}

export default QuickNavigation;
