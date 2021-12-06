import React, { useEffect } from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  useEffect(() => {
    document.title =
      "myFinance - Solusi untuk menyimpan catatan pengeluaran anda dengan mudah";
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <h1 style={{ fontWeight: "bold", fontSize: "60px", color: "#FEFBF3" }}>
          myFinance
        </h1>
        <p style={{ fontSize: "20px", color: "#FEFBF3" }}>
          Solusi untuk menyimpan catatan pengeluaran anda dengan mudah.
        </p>
      </div>
    </div>
  );
}
