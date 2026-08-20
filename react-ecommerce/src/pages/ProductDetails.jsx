import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-indigo-600 font-semibold">
            Loading Product...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600">{error}</h2>

          <Link
            to="/products"
            className="inline-block mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 mb-8"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-10">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-w-md h-[400px] object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="p-8 md:p-12">
              <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold capitalize">
                {product.category}
              </span>

              <h1 className="text-4xl font-extrabold text-gray-900 mt-5">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mt-5">
                <span className="text-yellow-500 text-lg">
                  ⭐ {product.rating}
                </span>

                <span className="text-gray-400">
                  | {product.stock} items available
                </span>
              </div>

              <p className="text-gray-500 leading-7 mt-6">
                {product.description}
              </p>

              <div className="mt-8">
                <span className="text-4xl font-extrabold text-indigo-600">
                  ${product.price}
                </span>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition shadow-lg">
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
