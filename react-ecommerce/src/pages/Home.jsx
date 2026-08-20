function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-indigo-600 font-semibold uppercase tracking-wider">
          Welcome to ShopVerse
        </p>

        <h1 className="text-5xl font-extrabold text-gray-900 mt-3">
          Everything You Need,
          <span className="text-indigo-600"> In One Place</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-xl mx-auto">
          Explore our collection of amazing products at great prices.
        </p>
      </div>
    </div>
  );
}

export default Home;
