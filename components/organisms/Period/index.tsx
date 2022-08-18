import styles from "./index.module.scss";
import Button from "../../atoms/button";
import { getDisplayName } from "next/dist/shared/lib/utils";

type Field<T> = {
  value: T;
  error: boolean;
};

type Props = {
  interval: Field<number>;
  setProgress: (progressNum: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Period: React.FC<Props> = (props) => {
  const getSpan = () => {
    return props.interval?.value == 0
      ? "day"
      : props.interval?.value == 50
      ? "week"
      : props.interval?.value == 100
      ? "month"
      : null;
  };

  return (
    <div>
      <div className={styles["text"]}>
        Please select the period for which you are requesting payment.
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["range-content"]}>
        <div className={styles["range-content__title"]}>Once a {getSpan()}</div>
        <input
          name="interval"
          type="range"
          min="0"
          max="100"
          className={styles["range-content__range"]}
          step="50"
          onChange={props.handleChange}
        />
      </div>

      <div className={styles["button-wrapper"]}>
        <div className={styles["button"]}>
          <Button
            text="Back"
            color="dark"
            onClick={() => props.setProgress(1)}
          />
        </div>
        <div className={styles["button"]}>
          <Button
            text="Next"
            color="secondary"
            onClick={() => props.setProgress(3)}
          />
        </div>
      </div>
    </div>
  );
};
