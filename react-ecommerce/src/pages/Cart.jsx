import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-7xl">🛒</div>

          <h1 className="text-3xl font-bold text-gray-800 mt-5">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-2">Add some products to your cart.</p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider">
            Shopping Cart
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Your Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center gap-6"
              >
                {/* Product Image */}
                <div className="w-32 h-32 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Information */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-indigo-600 font-bold mt-2">
                    ${item.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <button
                    className="w-9 h-9 bg-gray-100 rounded-lg font-bold text-gray-700"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span className="font-bold text-lg">{item.quantity}</span>

                  <button
                    className="w-9 h-9 bg-indigo-600 text-white rounded-lg font-bold"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-xl font-bold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove From Cart */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 text-red-500  text-lg font-semibold hover:text-red-700"
                >
                  🗑️ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>

            <div className="border-b border-gray-200 my-5"></div>

            <div className="flex justify-between text-gray-600">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mt-4">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600 mt-4">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>

            <div className="border-b border-gray-200 my-5"></div>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Total</span>

              <span className="text-2xl font-extrabold text-indigo-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" className="block w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-bold py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition shadow-md"
>
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="block text-center mt-4 text-indigo-600 font-semibold hover:text-indigo-800"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
