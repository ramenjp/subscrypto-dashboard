import * as React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { ethers } from "ethers";

type Props = {
  pathName: string | undefined;
  connectWallet?: () => void;
};

export const Header: React.FC<Props> = (props) => {
  const [isSigner, setIsSigner] = React.useState<boolean>(false);
  React.useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setIsSigner(!!signer);
  }, []);

  return (
    <div className={styles["content"]}>
      <Link href="/">
        <div className={styles["title"]}>SUBCRYPTO</div>
      </Link>
      <div className={styles["content__right"]}>
        <ul className={styles["content__list"]}>
          <Link href="/">
            <li
              className={`${styles["content__list-item"]} ${
                props.pathName == "/" && styles["bold"]
              }`}
            >
              HOME
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`${styles["content__list-item"]} ${
                props.pathName == "/dashboard" && styles["bold"]
              }`}
            >
              App
            </li>
          </Link>
        </ul>
        {isSigner ? null : (
          <div className={styles["button"]} onClick={props.connectWallet}>
            Connect wallet
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
