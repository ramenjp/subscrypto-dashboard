import styles from "./index.module.scss";
import Button from "../../atoms/button";

type Props = {
  setProgress: (progressNum: number) => void;
};

export const Period: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Please select the period for which you are requesting payment.
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["button-wrapper"]}>
        <Button
          text="Back"
          color="primary"
          onClick={() => props.setProgress(1)}
        />
        <Button
          text="Next"
          color="secondary"
          onClick={() => props.setProgress(3)}
        />
      </div>
    </div>
  );
};
