import * as React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import NotConnected from "../../organisms/NotConnected";
import Button from "../../atoms/button";
import Link from "next/link";
import { ReceiveToken } from "../../organisms/ReceiveToken";
import { Period } from "../../organisms/Period";
import { Amount } from "../../organisms/Amount";
import { ReceiveAddress } from "../../organisms/ReceiveAddress";

type Props = {
  wallet: string | undefined;
  tokenAddress: string;
  price: number;
  interval: number;

  connectWallet: () => void;
};

export const Dashboard: React.FC<Props> = (props) => {
  const [progress, setProgress] = React.useState<number>(1);
  return (
    <div className={styles["content"]}>
      {props.wallet ? (
        <div className={styles["content__wrap"]}>
          <div className={styles["content__left"]}>
            <ul className={styles["content__left-list"]}>
              <Link href="/">
                <li className={styles["content__left-item"]}>Dashboard</li>
              </Link>
              <li
                className={`${styles["content__left-item"]} ${styles["disabled"]}`}
              >
                Plans
              </li>
              <li
                className={`${styles["content__left-item"]} ${styles["disabled"]}`}
              >
                Document
              </li>
            </ul>
          </div>
          <div className={styles["content__right"]}>
            <div className={styles["title"]}>
              Let’s Create Your Subscription Plan
            </div>
            <div className={styles["progress"]}>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 1 && styles["progress__box-active"]
                }`}
              >
                Receive token
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 2 && styles["progress__box-active"]
                }`}
              >
                period
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 3 && styles["progress__box-active"]
                }`}
              >
                Amount
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 4 && styles["progress__box-active"]
                }`}
              >
                Receive Address
              </div>
            </div>
            <div className={styles["box"]}>
              {progress == 1 ? (
                <ReceiveToken setProgress={setProgress} />
              ) : progress == 2 ? (
                <Period setProgress={setProgress} />
              ) : progress == 3 ? (
                <Amount setProgress={setProgress} />
              ) : progress == 4 ? (
                <ReceiveAddress setProgress={setProgress} />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <NotConnected connectWallet={props.connectWallet} />
      )}
    </div>
  );
};

export default Dashboard;
