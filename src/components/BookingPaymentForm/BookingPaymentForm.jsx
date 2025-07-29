function BookingPaymentForm() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 space-y-6">
      {/* Your Details Section */}
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
            <select className="mt-1 w-full border rounded-md p-2 text-gray-700">
              <option>Mr</option>
              <option>Mrs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Fast Name</label>
            <input
              type="text"
              placeholder="John"
              className="mt-1 w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="mt-1 w-full border rounded-md p-2"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Country</label>
            <select className="mt-1 w-full border rounded-md p-2 text-gray-700">
              <option>Egypt</option>
              <option>Morocco</option>
              <option>Greece</option>
              <option>United States</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile</label>
            <input
              type="tel"
              placeholder="+20 000 0000 000"
              className="mt-1 w-full border rounded-md p-2"
            />
          </div>
        </div>
      </div>

      <hr />

      {/* Payment Details Section */}
      <div>
        <h2 className="text-xl font-bold">Payment Details</h2>

        <div className="mt-4">
          <label className="block text-sm font-medium">Card Number</label>
          <div className="mt-1 flex items-center border rounded-md p-2 justify-between">
            <input
              type="text"
              placeholder="*** *** *** ***"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="mt-1 w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              type="text"
              placeholder="8/8/2030"
              className="mt-1 w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Card Holder</label>
          <input
            type="text"
            placeholder="Card Holder Name"
            className="mt-1 w-full border rounded-md p-2"
          />
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md">
        PAY NOW
      </button>
    </div>
  );
}

export default BookingPaymentForm;
