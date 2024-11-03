import { TiDelete } from "react-icons/ti";
import styles from "./Table.module.css";

function Table({
  transaction,
  transaction2 = null,
  onHandleDeleteTransaction,
  children,
}) {
  // const expensesValue = transaction
  //   ?.map((transaction) => transaction.value)
  //   ?.reduce((acc, curent) => acc + curent, 0);

  const incomesValue = transaction2
    ?.map((transaction) => transaction.value)
    ?.reduce((acc, curent) => acc + curent, 0);

  const oneTableRow = transaction?.map((item) => (
    <tr className={styles.tr} key={item.id}>
      <td>{item.name}</td>
      <td
        style={
          children !== "Incomes"
            ? { color: "rgba(240, 136, 88, 1)" }
            : { color: "rgb(111, 181, 247)" }
        }
      >
        +{item.value?.toFixed(2)}
      </td>
      {children !== "Incomes" && (
        <td>
          {incomesValue && Math.round((item.value / incomesValue) * 100)}%
        </td>
      )}
      <td className={styles.button}>
        <TiDelete
          size="1.5em"
          onClick={() => onHandleDeleteTransaction(item.id, children)} // function for delete income-s
        ></TiDelete>
      </td>
    </tr>
  ));
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th
            className={
              children === "Incomes"
                ? styles.tableHeaderIncomes
                : styles.tableHeaderExpenses
            }
          >
            {children}
          </th>
        </tr>
        {transaction && oneTableRow}
      </tbody>
    </table>
  );
}

export default Table;
