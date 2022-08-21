import * as React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  type?: "submit" | "button";
  color?: "primary" | "secondary" | "dark";

  onClick?: () => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles["button"]} ${styles[props.color ?? "primary"]}`}
      onClick={props.onClick}
      type={props.type}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
