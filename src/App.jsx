import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./Components/Header";
import TransactionForm from "./Components/TransactionForm";
import IncomesExpensesTables from "./Components/IncomesExpensesTables";

function App() {
  const [incomesTransaction, setIncomes] = useState([]);
  const [expensesTransaction, setExpenses] = useState([]);

  function handleIncome(transaction) {
    setIncomes((incomesTransaction) => [...incomesTransaction, transaction]);
  }
  function handleExpense(transaction) {
    setExpenses((expensesTransaction) => [...expensesTransaction, transaction]);
  }
  function handleDeleteTransaction(id, string) {
    string === "Incomes"
      ? setIncomes(
          incomesTransaction.filter(
            (incomeTransaction) => incomeTransaction.id !== id
          )
        )
      : setExpenses((expensesTransaction) =>
          expensesTransaction.filter(
            (expenseTransaction) => expenseTransaction.id !== id
          )
        );
  }

  useEffect(function () {
    JSON.parse(localStorage.getItem("incomes"))
      ? setIncomes(JSON.parse(localStorage.getItem("incomes")))
      : [];
    JSON.parse(localStorage.getItem("expenses"))
      ? setExpenses(JSON.parse(localStorage.getItem("expenses")))
      : [];
  }, []);

  useEffect(
    function () {
      localStorage.setItem("incomes", JSON.stringify(incomesTransaction));
      localStorage.setItem("expenses", JSON.stringify(expensesTransaction));
    },
    [incomesTransaction, expensesTransaction]
  );
  return (
    <div className={styles.app}>
      <Header
        incomesTransaction={incomesTransaction}
        expensesTransaction={expensesTransaction}
      />
      <TransactionForm
        onHandleIncomes={handleIncome}
        onHandleExpenses={handleExpense}
      />
      <IncomesExpensesTables
        incomesTransaction={incomesTransaction}
        expensesTransaction={expensesTransaction}
        onHandleDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;
