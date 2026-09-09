import React from "react";

function BalanceCard({ title, amount, icon }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <span className="text-2xl">{icon}</span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-blue-900">{amount}</h2>
    </div>
  );
}

export default BalanceCard;
