import BookingPaymentForm from "../components/BookingPaymentForm/BookingPaymentForm";
import BookingSummary from "../components/BookingSummary/BookingSummary";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

function BookingReview() {
  const [summaryData, setSummaryData] = useState(null);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-start justify-end p-6 mt-[5%]">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl w-full">
          {/* Left: Payment Form */}
          <div className="bg-white rounded-xl shadow p-6">
            <BookingPaymentForm summaryData={summaryData} />
          </div>

          {/* Right: Booking Summary */}
          <div className="w-full lg:w-fit h-fit bg-white rounded-xl shadow p-4">
            <BookingSummary setSummaryData={setSummaryData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingReview;
