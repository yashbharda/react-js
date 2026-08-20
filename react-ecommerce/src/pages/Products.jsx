import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-4 text-xl font-semibold text-indigo-700">
            Loading Products...
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-5xl mb-4">😕</div>

          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="text-gray-500 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "all" || product.category === category;
    return matchSearch && matchCategory;
  });

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider">
            Our Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Explore Our Products
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover amazing products at the best prices.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl border border-indigo-200 bg-white outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-3 rounded-xl border border-indigo-200 bg-white outline-none focus:ring-2 focus:ring-indigo-400 capitalize"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All Categories" : item}
              </option>
            ))}
          </select>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl">🔍</div>

              <h2 className="text-2xl font-bold text-gray-700 mt-4">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching for another product.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
