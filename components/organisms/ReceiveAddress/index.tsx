import styles from "./index.module.scss";
import Button from "../../atoms/button";

type Field<T> = {
  value: T;
  error: boolean;
};

type Props = {
  tokenReceiveAddress: Field<string>;
  setProgress: (progressNum: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: HTMLElement) => void;
};

export const ReceiveAddress: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Enter the wallet address where you would like to receive your earnings.
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["address-input"]}>
        <input type="text" name="walletAddress" onChange={props.handleChange} />
      </div>
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
