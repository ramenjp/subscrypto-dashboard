import * as React from "react";
import styles from "./index.module.scss";
import { Button } from "../../atoms/button";

type Props = {
  connectWallet: () => void;
  onClick: () => void;
  cancelSubscription: (address: string) => void;
};

export const Demo: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>User Demo Page</div>
      <Button onClick={props.onClick} text="Start Subscribe!"></Button>
      <div className={styles["button"]}>
        <Button
          onClick={
            () =>
              props.cancelSubscription(
                "0x42C2F689578Fd74b141370F52510Fd8B5eF28fA1"
              ) // yosuke no wallet address
          }
          text="Cancel Subscribe"
          color="dark"
        ></Button>
      </div>
    </div>
  );
};
