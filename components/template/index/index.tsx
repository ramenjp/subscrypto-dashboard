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
            ビジネスモデルに合わせて、最適な Income Flow を設計できる。
          </div>
          <div className={styles["about__section-text"]}>
            クレジットカード会社に決済を代行していたこれまでのサブスクリプションモデルでは、売上債権回転期間の短縮に限界があった。
            <span className={styles["about__highlight"]}>
              SUBSCRYPTOは、売上債権回転期間を日単位まで圧縮することによってキャッシュフローを改善する。
            </span>
            更にあなたがホテルのサブスクリプションを提供している事業者なのか、音楽配信を提供している事業者なのかによって、望むキャッシュフローは異なるはずだ。
            <span className={styles["about__highlight"]}>
              SUBSCRYPTOを用いれば、サブスクリプションの期間（例えば毎日でも）と単価を柔軟に設定できるため、ビジネスモデルにあわせてキャッシュフローを最適化することができる。
            </span>
          </div>
        </div>
        <div className={styles["about__section"]}>
          <div className={styles["about__section-title"]}>
            顧客のロイヤリティに合わせて、スムーズにRewardを提供できる。
          </div>
          <div className={styles["about__section-text"]}>
            サブスクリプションの加入期間に応じて、ユーザーにRewardを提供することができる。最適なタイミングでRewardを与えることは、Recurring
            rateを低下させ、LTVを最大化することに繋がるだろう。従来のサブスクリプションビジネスでは、売上の多くの割合をマーケティングFeeに当てていた。SUBSCRYPTOを用いて、例えば半年間加入してくれたユーザーにRewardとしてCoolな
            NFTを提供すれば、彼らがバイラルでマーケティングを行ってくれることにより、マーケティングFee
            の圧縮も期待できる。
          </div>
        </div>
      </div>
    </div>
  );
};
