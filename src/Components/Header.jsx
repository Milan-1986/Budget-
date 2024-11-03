import styles from "./Header.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// to display the current date in the header
let date = new Date();
let year = date.getFullYear();
let month = months[date.getMonth()];

function Header({ incomesTransaction, expensesTransaction }) {
  const incomesValue = incomesTransaction
    ?.map((transaction) => transaction.value)
    ?.reduce((acc, curent) => acc + curent, 0);
  const expensesValue = expensesTransaction
    ?.map((transaction) => transaction.value)
    ?.reduce((acc, curent) => acc + curent, 0);
  return (
    <div className={styles.header}>
      <div className={styles.headerDate}>
        Available budget in {`${month} ${year}`}
      </div>
      <div className={styles.headerBudget}>
        {incomesValue > expensesValue
          ? "+"
          : incomesValue < expensesValue
          ? "-"
          : null}
        {Math.abs(incomesValue - expensesValue).toFixed(2)}
      </div>
      {incomesValue < expensesValue && (
        <span className={styles.headerError}>
          Expenses are greater than incomes. Please be cautious.
        </span>
      )}
      <div className={styles.headerIncomes}>
        Incomes <span>+{incomesValue.toFixed(2)}</span>
        {incomesValue ? (
          <span style={{ opacity: 0 }}>
            {Math.round((expensesValue / incomesValue) * 100)} %
          </span>
        ) : null}
      </div>
      <div className={styles.headerExpenses}>
        Expenses <span>-{expensesValue.toFixed(2)}</span>
        {incomesValue ? (
          <span>{Math.round((expensesValue / incomesValue) * 100)} %</span>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
