import styles from "./index.module.scss";
import Button from "../../atoms/button";
type Field<T> = {
  value: T;
  error: boolean;
};

type Props = {
  tokenAddress: Field<string>;
  setProgress: (progressNum: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Amount: React.FC<Props> = (props) => {
  const getTicker = (address: string): string => {
    return "USDC";
  };
  return (
    <div>
      <div className={styles["text"]}>
        <strong>Set the number of amount</strong> you wish to receive based on
        the conditions you determined in STEP1 and STEP2.
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["address-input"]}>
        <input type="text" name="price" onChange={props.handleChange} />
        <div className={styles["address-input__ticker"]}>
          {getTicker(props.tokenAddress.value)}
        </div>
      </div>
      <div className={styles["button-wrapper"]}>
        <div className={styles["button"]}>
          <Button
            text="Back"
            color="dark"
            onClick={() => props.setProgress(2)}
          />
        </div>
        <div className={styles["button"]}>
          <Button
            text="Next"
            color="secondary"
            onClick={() => props.setProgress(4)}
          />
        </div>
      </div>
    </div>
  );
};
