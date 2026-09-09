function TransactionItem({ transaction, onEdit }) {
  const isCredit = transaction.type === "credit";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4 last:border-0">
      <div>
        <h3 className="font-medium text-slate-800">{transaction.title}</h3>

        <p className="text-sm text-slate-400">{transaction.date}</p>
      </div>

      <p
        className={`font-semibold ${
          isCredit ? "text-green-600" : "text-red-500"
        }`}
      >
        {isCredit ? "+" : "-"} ₹{transaction.amount.toLocaleString()}
      </p>
      <button
        onClick={() => onEdit(transaction.id)}
        className="rounded-lg px-3 py-2 text-sm text-blue-700 hover:bg-blue-50"
      >
        Edit
      </button>
    </div>
  );
}

export default TransactionItem;
