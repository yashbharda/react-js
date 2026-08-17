import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  const addCart = (product) => {
    const alreadyInCArt = cart.some((item) => item.id === product.id);
    if (alreadyInCArt) {
      return;
    }
    setCart([...cart, product]);
  };

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Product Store
          </h1>
          <div className="flex justify-end mb-6">
            <div className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold">
              🛒 Cart: {cart.length}
            </div>
          </div>
          {cart.length > 0 && (
            <div className="bg-gray-800 rounded-xl p-5 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Cart</h2>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-700 p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-green-400 font-semibold">
                        ₹{item.price}
                      </p>
                    </div>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                      onClick={() => removeCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-600 mt-4 pt-4 flex justify-between">
                <h3 className="text-xl font-bold text-white">Total</h3>

                <h3 className="text-xl font-bold text-green-400">
                  ₹{totalPrice.toFixed(2)}
                </h3>
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search Products..."
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-4 py-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              {categories.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {loading ? (
            <p className="text-white text-center text-xl">
              Loading Products...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) =>
                  product.title.toLowerCase().includes(search.toLowerCase()),
                )
                .filter((product) => {
                  const matchesSearch = product.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                  const matchesCategory =
                    category === "All Categories" ||
                    product.category === category;
                  return matchesSearch && matchesCategory;
                })
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 rounded-xl p-5 shadow-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-52 object-contain bg-white rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-400">
                        ₹{product.price}
                      </span>

                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        onClick={() => addCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
