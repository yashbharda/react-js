import { useState, useRef, useEffect } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Food");
  const [expense, setExpense] = useState(() => {
    const savedExpense = localStorage.getItem("expenses");
    return savedExpense ? JSON.parse(savedExpense) : [];
  });
  const titleInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      title: title,
      price: price,
      category: category,
    };
    setExpense([...expense, newExpense]);
    setTitle("");
    setPrice("");
    setCategory("Food");
    titleInputRef.current.focus();
  };

  const deleteExpense = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
  };

  const totalExpense = expense.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  const searchExpense = useCallback(() => {
    return expense.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        filterCategory === "All" || item.category === filterCategory;
      return matchSearch && matchCategory;
    });
  }, [expense, search, filterCategory]);

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            Expense Tracker
          </h1>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search expenses..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 text-slate-800 outline-none border border-slate-200 focus:border-indigo-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full mb-6 px-4 py-3 rounded-lg bg-slate-50 text-slate-800 outline-none border border-slate-200 focus:border-indigo-500 mt-3"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Expense Form */}
          <div className="space-y-3 mb-8">
            <input
              type="text"
              placeholder="Enter expense title..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 text-slate-800 outline-none border border-slate-200 focus:border-indigo-500"
              ref={titleInputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter amount..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 text-slate-800 outline-none border border-slate-200 focus:border-indigo-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <select
              className="w-full px-4 py-3 rounded-lg bg-slate-50 text-slate-800 outline-none border border-slate-200 focus:border-indigo-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>

            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
              onClick={addExpense}
            >
              Add Expense
            </button>
          </div>

          {/* Total */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-700">
              Total Expense
            </h2>

            <span className="text-2xl font-bold text-indigo-600">
              ₹{totalExpense}
            </span>
          </div>

          {/* Expenses */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-700">Expenses</h2>

              <span className="text-slate-500">Total: {expense.length}</span>
            </div>

            {/* Expense Card */}
            {searchExpense().map((expens) => (
              <div
                className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between mb-3"
                key={expens.id}
              >
                <div>
                  <h3 className="text-slate-800 font-semibold text-lg">
                    {expens.title}
                  </h3>

                  <p className="text-slate-500">{expens.category}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-emerald-600 font-bold">
                    ₹{expens.price}
                  </span>

                  <button
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => deleteExpense(expens.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* No Expenses */}
            {searchExpense().length === 0 && (
              <p className="text-slate-400 text-center py-6">
                {search ? "No matching expenses found" : "No expenses found"}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
