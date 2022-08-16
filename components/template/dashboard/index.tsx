import * as React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";

export const Dashboard: NextPage = () => {
  return (
    <div className={styles["content"]}>
      <div>
        <div className={styles["title"]}>SUBSCRYPTO</div>
        <div className={styles["subtitle"]}>Web3 subscription</div>
        <div className={styles["button"]}>Connect Wallet</div>
      </div>
    </div>
  );
};

export default Dashboard;
