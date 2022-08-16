import * as React from "react";
import styles from "./index.module.scss";

type Props = {
  connectWallet: () => void;
};

export const NotConnected: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div>
        <div className={styles["title"]}>SUBSCRYPTO</div>
        <div className={styles["subtitle"]}>Web3 subscription</div>
        <div className={styles["button"]} onClick={props.connectWallet}>
          Connect Wallet
        </div>
      </div>
    </div>
  );
};

export default NotConnected;
