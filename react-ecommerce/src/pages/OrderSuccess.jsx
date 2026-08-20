import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const order = location.state;

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Order information not found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-indigo-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Success */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">
          <div className="text-7xl">✅</div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-5">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-3">Thank you for your order.</p>

          {/* Order ID */}
          <div className="bg-indigo-50 rounded-2xl p-5 mt-7">
            <p className="text-sm text-gray-500">Order ID</p>

            <p className="text-xl font-bold text-indigo-600 mt-1">
              #{order.orderId}
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>

          <div className="border-b border-gray-200 my-5"></div>

          {/* Products */}
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-50 rounded-xl shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>

                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <p className="font-bold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-b border-gray-200 my-5"></div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Total</span>

            <span className="text-2xl font-extrabold text-indigo-600">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Delivery Information
          </h2>

          <div className="border-b border-gray-200 my-5"></div>

          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Name:</span>{" "}
              {order.customer.name}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {order.customer.email}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              {order.customer.phone}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Address:</span>{" "}
              {order.customer.address}
            </p>

            <p>
              <span className="font-semibold text-gray-800">City:</span>{" "}
              {order.customer.city}
            </p>

            <p>
              <span className="font-semibold text-gray-800">State:</span>{" "}
              {order.customer.state}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Pincode:</span>{" "}
              {order.customer.pincode}
            </p>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
