import { useForm } from "react-hook-form";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addBooking } from "../../store/bookingSlice";
function BookingPaymentForm({ summaryData }) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      const fullName = user.userName || "";
      const [firstName, ...rest] = fullName.trim().split(" ");
      const lastName = rest.join(" ");

      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("email", user.email || "");
      setValue("country", user.country || "");
      setValue("mobile", user.phone || "");
    }
  }, [user, setValue]);
  const isSummaryComplete =
    summaryData &&
    summaryData.checkIn &&
    summaryData.checkOut &&
    summaryData.nights;

  const handleFormSubmit = (data) => {
    if (!isSummaryComplete) {
      toast.error("Please complete your booking before submitting.");
      return;
    }

    if (!summaryData?.hotelData?.id) {
      toast.error("Hotel information is missing.");
      return;
    }

    const finalBooking = {
      ...summaryData,
      ...data,
      createdAt: new Date().toISOString(),
    };

    dispatch(addBooking(finalBooking));
    setShowModal(true);
  };

  return (
    <>
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 space-y-6"
      >
        {/*Details Section */}
        <div>
          <h2 className="text-xl font-bold">Your Details</h2>
          <p className="text-sm text-gray-500 mt-1">
            Whether you are in town for business or leisure, San Francisco
            Marriott Marquis welcomes travelers to Northern California with
            exceptional service, spacious
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <select
                {...register("title", { required: "Title is required" })}
                className="mt-1 w-full border rounded-md p-2 text-gray-700"
              >
                <option value="">Select</option>
                <option>Mr</option>
                <option>Mrs</option>
              </select>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="mt-1 w-full border rounded-md p-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
                className="mt-1 w-full border rounded-md p-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              readOnly
              placeholder="yourmail@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-1 w-full border rounded-md p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Country</label>
              <select
                {...register("country", { required: "Country is required" })}
                className="mt-1 w-full border rounded-md p-2 text-gray-700"
              >
                <option value="">Select</option>
                <option value="EG">Egypt</option>
                <option value="MA">Morocco</option>
                <option value="GR">Greece</option>
                <option value="US">United States</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="tel"
                placeholder="0123456789"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^\d{10,}$/,
                    message: "Mobile must be at lest 10 digits",
                  },
                })}
                className="mt-1 w-full border rounded-md p-2"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>
        </div>

        <hr />

        {/* Payment Details Section */}
        <div>
          <h2 className="text-xl font-bold">Payment Details</h2>

          <div className="mt-4">
            <label className="block text-sm font-medium">Card Number</label>
            <div className="mt-1 flex items-center border rounded-md p-2">
              <input
                type="text"
                placeholder="123456789012"
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^\d{12}$/,
                    message: "Card number must be 12 digits",
                  },
                })}
                className="w-full focus:outline-none"
              />
            </div>
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">CVV</label>
              <input
                type="text"
                placeholder="123"
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "CVV must be 3 digits",
                  },
                })}
                className="mt-1 w-full border rounded-md p-2"
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm">{errors.cvv.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Expiry Date</label>
              <input
                type="date"
                {...register("expiryDate", {
                  required: "Expiry date is required",
                })}
                className="mt-1 w-full border rounded-md p-2"
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-sm">
                  {errors.expiryDate.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Card Holder</label>
            <input
              type="text"
              placeholder="Card Holder Name"
              {...register("cardHolder", {
                required: "Card holder name is required",
                minLength: {
                  value: 10,
                  message: "Card holder name must be at least 10 characters",
                },
              })}
              className="mt-1 w-full border rounded-md p-2"
            />
            {errors.cardHolder && (
              <p className="text-red-500 text-sm">
                {errors.cardHolder.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md"
        >
          PAY NOW
        </button>
      </form>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default BookingPaymentForm;
