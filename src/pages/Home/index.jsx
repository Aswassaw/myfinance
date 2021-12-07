import React, { useEffect } from "react";
import useAuthContext from "../../hooks/auth/useAuthContext";
import useCollection from "../../hooks/useCollection";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import styles from "./Home.module.css";

export default function Home() {
  const { authState } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", authState.user.uid],
    ["createdAt", "desc"]
  );

  useEffect(() => {
    document.title = "myFinance - Home";
  }, []);
  

  return (
    <>
      {/* jika akun belum terverifikasi */}
      {!authState.user.emailVerified && (
        <div className={styles.verified}>Your account is not verified yet, please verify your account.</div>
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* jika ada error */}
          {error && <p>{error}</p>}
          {/* jika tidak ada error */}
          {!error && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm emailVerified={authState.user.emailVerified} uid={authState.user.uid} />
        </div>
      </div>
    </>
  );
}
