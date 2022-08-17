import styles from "./index.module.scss";
import Button from "../../atoms/button";

type Props = {
  setProgress: (progressNum: number) => void;
  handleSubmit: (e: HTMLElement) => void;
};

export const ReceiveAddress: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Enter the wallet address where you would like to receive your earnings.
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["button-wrapper"]}>
        <Button
          text="Back"
          color="primary"
          onClick={() => props.setProgress(3)}
        />
        <Button
          text="Confirm"
          color="secondary"
          onClick={() => props.handleSubmit}
        />
      </div>
    </div>
  );
};
