import * as React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  color?: "primary" | "secondary" | "dark";

  onClick?: () => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <div
      className={`${styles["button"]} ${styles[props.color ?? "primary"]}`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default Button;
