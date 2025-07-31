import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.6)] bg-opacity-40">
      <div className="bg-white rounded-xl p-8 w-full max-w-md text-center shadow-lg">
        <FaCheckCircle className="text-green-500 mx-auto text-6xl mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Booking Success</h2>
        <p className="text-gray-500 mb-6">Your booking has been confirmed.</p>
        <Link to="/userProfile">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md  cursor-pointer"
          >
            VIEW ALL BOOKINGS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessModal;
