import { createContext, useContext } from "react";

export const BankContext = createContext({
  transactions: [],
  addTransaction: (transaction) => {},
  updateTransaction: (id, transaction) => {},
});

export const useBank = () => {
  return useContext(BankContext);
};

export const BankProvider = BankContext.Provider;
