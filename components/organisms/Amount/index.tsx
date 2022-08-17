import styles from "./index.module.scss";
import Button from "../../atoms/button";

type Props = {
  setProgress: (progressNum: number) => void;
};

export const Amount: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Set the amount you wish to receive based on the conditions you
        determined in STEP1 and STEP2.{" USDC"}
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["button-wrapper"]}>
        <Button
          text="Back"
          color="primary"
          onClick={() => props.setProgress(2)}
        />
        <Button
          text="Next"
          color="secondary"
          onClick={() => props.setProgress(4)}
        />
      </div>
    </div>
  );
};
