import "./tw-global.css";
import styles from "./global-style";
import { ttw } from "common/utils";
import Head from "next/head";

export default function AppWrapper({ children }) {
  return (
    <>
      <Head>
        <title>Ngodingo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ttw(styles.Global)}>{children}</main>
    </>
  );
}
