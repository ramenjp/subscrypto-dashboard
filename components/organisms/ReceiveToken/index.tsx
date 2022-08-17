import styles from "./index.module.scss";
import Button from "../../atoms/button";

type Props = {
  setProgress: (progressNum: number) => void;
};

export const ReceiveToken: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Please select the cryptocurrency you wish to receive. You may
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["button"]} onClick={() => props.setProgress(2)}>
        <Button text="Next" color="primary" />
      </div>
    </div>
  );
};
