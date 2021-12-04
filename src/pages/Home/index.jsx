import React from "react";
import TransactionForm from "./TransactionForm";
import useAuthContext from "../../hooks/auth/useAuthContext";
import styles from "./Home.module.css";

export default function Home() {
  const { authState } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={authState.user.uid} />
      </div>
    </div>
  );
}
