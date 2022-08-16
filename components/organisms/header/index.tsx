import * as React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  connectWallet?: () => void;
};

export const Header: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>SUBCRYPTO</div>
      <div className={styles["content__right"]}>
        <ul className={styles["content__list"]}>
          <Link href="/">
            <li className={styles["content__list-item"]}>HOME</li>
          </Link>
          <Link href="/dashboard">
            <li className={styles["content__list-item"]}>App</li>
          </Link>
        </ul>
        <div className={styles["button"]} onClick={props.connectWallet}>
          Connect wallet
        </div>
      </div>
    </div>
  );
};

export default Header;
