import * as React from "react";
import styles from "./index.module.scss";
import { Button } from "../../atoms/button";

type Props = {
  connectWallet: () => void;
  onClick: () => void;
};

export const Demo: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>User Demo Page</div>
      <Button onClick={props.onClick} text="Start Subscribe!"></Button>
    </div>
  );
};
