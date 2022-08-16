import * as React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export const Home: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["content-left"]}>
        <div className={styles["title"]}>SUBSCRYPTO</div>;
        <div className={styles["subtitle"]}>Never let your customer bored.</div>
        <div className={styles["description"]}>
          The next generation of decentralized Crypto Subscryption Protocol.
        </div>
        <div className={styles["button-wrap"]}>
          <Link href="/dashboard">
            <div className={styles["button-secondary"]}>Launch App</div>
          </Link>
          <div className={styles["button"]}>Connect Wallet</div>
        </div>
      </div>
      <div className={styles["content-right"]}>
        <Image src="/img/phone.png" width="367" height="446" />
      </div>
    </div>
  );
};
