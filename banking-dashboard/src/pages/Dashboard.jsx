import { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionItem from "../components/TransactionItem";
import { useBank } from "../contexts";

function Dashboard() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "debit",
  });

  const { transactions, addTransaction, updateTransaction } = useBank();
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount) {
      return;
    }

    if (editId) {
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editId
            ? {
                ...transaction,
                title: formData.title,
                amount: Number(formData.amount),
                type: formData.type,
              }
            : transaction,
        ),
      );

      setEditId(null);
    } else {
      const newTransaction = {
        id: Date.now(),
        title: formData.title,
        amount: Number(formData.amount),
        type: formData.type,
        date: new Date().toLocaleDateString(),
      };
      setTransactions([newTransaction, ...transactions]);
    }

    setFormData({
      title: "",
      amount: "",
      type: "debit",
    });
  };

  const handleEdit = (id) => {
    const selectedTransaction = transactions.find(
      (transaction) => transaction.id === id,
    );

    setFormData({
      title: selectedTransaction.title,
      amount: selectedTransaction.amount,
      type: selectedTransaction.type,
    });
    setEditId(id);
  };

  const totalIncome = transactions
    .filter((item) => item.type === "credit")
    .reduce((total, item) => total + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === "debit")
    .reduce((total, item) => total + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filterType === "all" || transaction.type === filterType;

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="flex-1 bg-slate-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Welcome back, Yash 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Balance Cards */}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <BalanceCard
          title="Total Balance"
          amount={`₹${totalBalance.toLocaleString()}`}
          icon="💰"
        />

        <BalanceCard
          title="Total Income"
          amount={`₹${totalIncome.toLocaleString()}`}
          icon="📈"
        />

        <BalanceCard
          title="Total Expense"
          amount={`₹${totalExpense.toLocaleString()}`}
          icon="📉"
        />

        <BalanceCard
          title="Savings"
          amount={`₹${totalBalance.toLocaleString()}`}
          icon="🏦"
        />
      </div>

      <div className="mt-8">
        {/* Top Section */}

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Add Transaction */}

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              {editId ? "Update Transaction" : "Add Transaction"}
            </h2>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Transaction title"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600"
              >
                {editId ? "Update Transaction" : "Add Transaction"}
              </button>
            </form>
          </div>

          {/* Quick Actions */}

          <div className="rounded-2xl bg-blue-900 p-6 text-white shadow-sm">
            <h2 className="text-xl font-bold">Quick Actions</h2>

            <div className="mt-5 space-y-3">
              <button className="w-full rounded-xl bg-orange-500 px-4 py-3 font-medium hover:bg-orange-600">
                💸 Transfer Money
              </button>

              <button className="w-full rounded-xl bg-white px-4 py-3 font-medium text-blue-900 hover:bg-slate-100">
                📄 View Statement
              </button>

              <button className="w-full rounded-xl border border-white/30 px-4 py-3 font-medium hover:bg-blue-800">
                💳 Manage Cards
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-900">
              Recent Transactions
            </h2>

            <button className="text-sm font-medium text-orange-500">
              View All
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transaction..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="all">All Transactions</option>
              <option value="credit">Income</option>
              <option value="debit">Expense</option>
            </select>
          </div>

          <div>
            {filteredTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
