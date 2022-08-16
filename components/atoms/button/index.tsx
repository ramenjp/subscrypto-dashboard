import * as React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  color?: "primary" | "secondary";
};

export const Button: React.FC<Props> = (props) => {
  return (
    <div className={`${styles["button"]} ${styles[props.color ?? "primary"]}`}>
      <p>{props.text}</p>
    </div>
  );
};

export default Button;
