import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[520px] flex flex-col">
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 p-4 h-[220px] shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
        />

        {/* Sale Badge */}
        <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          SALE
        </span>

        {/* Rating */}
        <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          ⭐ {product.rating}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span className="inline-block w-fit bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mt-3 h-14 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 h-10 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-auto pt-5">
          <span className="text-2xl font-extrabold text-indigo-600">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through ml-2">
            ${Math.round(product.price * 1.2)}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            🛒 Add to Cart
          </button>

          {/* View Details */}
          <Link
            to={`/products/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-200 transition text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
