import React from "react";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  return (
    <>
      <h3 className={styles[`transaction-list-title`]}>Transaction List</h3>
      {/* jika transactions masih null/loading */}
      {!transactions && <p>Loading...</p>}
      {/* jika transactions telah tersedia */}
      {transactions && (
        <>
          {transactions.length > 0 ? (
            <ul className={styles.transactions}>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <p className={styles.name}>{transaction.name}</p>
                  <p className={styles.amount}>Rp. {transaction.amount}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Transaction data not found. Let's create one.</p>
          )}
        </>
      )}
    </>
  );
}
