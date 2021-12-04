import React, { useEffect } from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  useEffect(() => {
    document.title =
      "myFinance - Solusi untuk menyimpan catatan pengeluaran anda dengan mudah";
  }, []);

  return (
    <div className={styles.landing}>
      <h1>myFinance</h1>
      <p>Solusi untuk menyimpan catatan pengeluaran anda dengan mudah.</p>
    </div>
  );
}
