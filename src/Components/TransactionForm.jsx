import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./TransactionForm.module.css";

function TransactionForm({ onHandleIncomes, onHandleExpenses }) {
  const [option, setOption] = useState("incomes");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const transaction = {
      id: uuid(),
      name: name,
      value: parseInt(value),
    };
    if (option === "incomes") {
      onHandleIncomes(transaction);
    }
    if (option === "expenses") {
      onHandleExpenses(transaction);
    }
    setName(""), setValue("");
  }

  return (
    // <div className={styles.transactionForm}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <select
        className={styles.formSelect}
        value={option}
        onChange={(event) => setOption(event.target.value)}
        name="option"
      >
        <option value="incomes">+</option>
        <option value="expenses">-</option>
      </select>

      <input
        className={styles.formValue}
        type="number"
        required
        placeholder="value"
        min={1}
        value={value}
        name="value"
        onChange={(event) => setValue(event.target.value)}
      />
      <input
        className={styles.formDescription}
        type="text"
        required
        placeholder="Add description"
        maxLength={50}
        onChange={(event) => setName(event.target.value)}
        value={name}
        name="name"
        step="0.01"
      />

      <div className={styles.formBtn}>
        <button
          type="submit"
          className={
            option === "incomes" ? styles.formBtnIncome : styles.formBtnExpense
          }
        >
          Enter transaction
        </button>
      </div>
    </form>
    // </div>
  );
}

export default TransactionForm;
