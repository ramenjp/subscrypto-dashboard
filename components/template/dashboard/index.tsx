import * as React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import NotConnected from "../../organisms/NotConnected";

type Props = {
  wallet: string | undefined;
  connectWallet: () => void;
};

export const Dashboard: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      {props.wallet ? (
        <div>connected</div>
      ) : (
        <NotConnected connectWallet={props.connectWallet} />
      )}
    </div>
  );
};

export default Dashboard;
