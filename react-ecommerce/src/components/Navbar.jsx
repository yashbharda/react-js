import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const {cart} = useCart();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          ShopVerse
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-bold"
                : "text-gray-600 hover:text-indigo-600 font-medium transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-bold"
                : "text-gray-600 hover:text-indigo-600 font-medium transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-bold"
                : "text-gray-600 hover:text-indigo-600 font-medium transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-bold"
                : "text-gray-600 hover:text-indigo-600 font-medium transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Cart */}
        <NavLink to="/cart" className="relative bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          🛒 Cart
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length  }
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
