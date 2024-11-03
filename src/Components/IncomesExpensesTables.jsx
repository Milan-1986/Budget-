import Table from "./Table";
import styles from "./IncomesExpensesTables.module.css";

function IncomesExpensesTables({
  incomesTransaction,
  expensesTransaction,
  onHandleDeleteTransaction,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.tableIncomes}>
        <Table
          transaction={incomesTransaction}
          onHandleDeleteTransaction={onHandleDeleteTransaction}
        >
          {"Incomes"}
        </Table>
      </div>
      <div className={styles.tableExpenses}>
        <Table
          transaction={expensesTransaction}
          transaction2={incomesTransaction}
          onHandleDeleteTransaction={onHandleDeleteTransaction}
        >
          {"Expense"}
        </Table>
      </div>
    </div>
  );
}

export default IncomesExpensesTables;
