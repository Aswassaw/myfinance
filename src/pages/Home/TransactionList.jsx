import React from "react";
import Swal from "sweetalert2";
import useFirestore from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  const deleteTransaction = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDocument(id);

        Swal.fire("Deleted!", "That transaction has been deleted.", "success");
      }
    });
  };

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
                  <button onClick={() => deleteTransaction(transaction.id)}>
                    <span>x</span>
                  </button>
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
