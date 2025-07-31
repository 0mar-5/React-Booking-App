import { useLocation } from "react-router-dom";

function QuickNavigation({ width }) {
  const location = useLocation();
  const fullUrl = `${location.pathname}${location.search}`;
  return (
    <div
      className={`${width} bg-[#f9fafb] px-6 py-3 rounded-md shadow-sm  mx-auto mt-[11%] transition-all duration-400`}
    >
      <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
        <span>Hotels</span>
        <span className="text-gray-400 font-normal">|</span>
        <a href="#" className="text-blue-600 hover:underline">
          {fullUrl}
        </a>
      </h2>
    </div>
  );
}

export default QuickNavigation;
