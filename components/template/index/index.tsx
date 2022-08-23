import * as React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  connectWallet: () => void;
};

export const Home: React.FC<Props> = (props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["top"]}>
        <div className={styles["content-left"]}>
          <div className={styles["title"]}>SUBSCRYPTO</div>
          <div className={styles["subtitle"]}>
            Never let your customer bored.
          </div>
          <div className={styles["description"]}>
            The next generation of decentralized Crypto Subscryption Protocol.
          </div>
          <div className={styles["button-wrap"]}>
            <Link href="/dashboard">
              <div className={styles["button-secondary"]}>Launch App</div>
            </Link>
            <div className={styles["button"]} onClick={props.connectWallet}>
              Connect Wallet
            </div>
          </div>
        </div>
        <div className={styles["content-right"]}>
          <Image src="/img/Subscrypto.png" width="633" height="355" />
        </div>
      </div>
      <div className={styles["about"]}>
        <div className={styles["about__title"]}>Web3 Subscription Protocol</div>
        <div className={styles["about__section"]}>
          <div className={styles["about__section-title"]}>
            We Help Enterprises Shorten the Collection Period for trade accounts
            receivable can be compressed
          </div>
          <div className={styles["about__section-text"]}>
            Most subscription models relies on third party payment system that
            as payment agents, which have limited chance to shorten the
            receivables turnover period.
            <div className={styles["about__highlight"]}>
              SUBSCRYPTO improves enterprise cash flow by decreasing the
              receivables turnover period.
            </div>
          </div>
        </div>
        <div className={styles["about__section"]}>
          <div className={styles["about__section-title"]}>
            With SDK, enterprise can easily set up any subscription plan that
            best fits their business model perfectly
          </div>
          <div className={styles["about__section-text"]}>
            The cash flow cycle differs depending on enterprise’s business
            domains.
            <div className={styles["about__highlight"]}>
              With SUBSCRYPTO, the subscription period (even on a daily basis)
              and unit price can be flexibly set, which optimizes the cash flow
              cycle to suit any business model.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
