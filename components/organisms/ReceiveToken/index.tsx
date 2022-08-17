import styles from "./index.module.scss";
import Button from "../../atoms/button";
import Image from "next/image";

type Field<T> = {
  value: T;
  error: boolean;
};

type Props = {
  tokenAddress: Field<string>;
  setProgress: (progressNum: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ReceiveToken: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles["text"]}>
        Please select the cryptocurrency you wish to receive. You may
      </div>
      <div className={styles["text"]}>select more than one.</div>
      <div className={styles["token"]}>
        <label>
          <div className={styles["token__box"]}>
            <input
              type="radio"
              id="tokenAddress"
              name="tokenAddress"
              value="toke0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56nAddress"
              onChange={props.handleChange}
              checked={
                props.tokenAddress.value ===
                "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
              }
            />
            <Image src="/img/BUSD.jpg" width="82" height="82" />
            <p className={styles["token__name"]}>BUSD</p>
          </div>
        </label>

        <label>
          <div className={styles["token__box"]}>
            <input
              type="radio"
              id="tokenAddress"
              name="tokenAddress"
              value="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
              onChange={props.handleChange}
              checked={
                props.tokenAddress.value ===
                "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
              }
            />
            <Image src="/img/USDC.jpg" width="82" height="82" />
            <p className={styles["token__name"]}>USDC</p>
          </div>
        </label>

        <label>
          <div className={styles["token__box"]}>
            <input
              type="radio"
              id="tokenAddress"
              name="tokenAddress"
              value="USDT"
              onChange={props.handleChange}
              checked={props.tokenAddress.value === "USDT"}
            />
            <Image src="/img/USDT.jpg" width="82" height="82" />
            <p className={styles["token__name"]}>USDT</p>
          </div>
        </label>

        <label>
          <div className={styles["token__box"]}>
            <input
              type="radio"
              id="tokenAddress"
              name="tokenAddress"
              value="DAI"
              onChange={props.handleChange}
              checked={props.tokenAddress.value === "DAI"}
            />
            <Image src="/img/DAI.jpg" width="82" height="82" />
            <p className={styles["token__name"]}>DAI</p>
          </div>
        </label>
      </div>
      <div className={styles["button"]} onClick={() => props.setProgress(2)}>
        <Button text="Next" color="dark" />
      </div>
    </div>
  );
};
