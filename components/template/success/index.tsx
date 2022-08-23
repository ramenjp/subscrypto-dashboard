import * as React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  subscryptoAddress: string;
};

export const Success: React.FC<Props> = (props) => {
  const router = useRouter();
  const address = router.asPath.split(/\?address=/)[1];
  return (
    <div className={styles["content"]}>
      <div className={styles["top"]}>
        <div className={styles["title"]}>SUCCESS CREATE YOUR SUBSCRIPTION</div>
      </div>
      <div className={styles["about"]}>
        <div className={styles["about__title"]}>contract address</div>
        <div suppressHydrationWarning className={styles["about__title"]}>
          {address}
        </div>
      </div>
    </div>
  );
};
