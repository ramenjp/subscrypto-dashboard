import * as React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  color?: "primary" | "secondary";
};

export const Dashboard: React.FC<Props> = (props) => {
  return (
    <div className={`${styles["button"]} ${styles[props.color ?? "primary"]}`}>
      <p className={styles["button__text"]}>{props.text}</p>
    </div>
  );
};

export default Dashboard;
