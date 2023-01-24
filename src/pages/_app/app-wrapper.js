import './globals.css'
import styles from "./global-style"
import { ttw } from "@utilts"
import Head from "next/head"

export default function AppWrapper ({children}) {

  const attr = {
    Main: {}
  }
  attr.Main.className = ttw(styles.Global)

  return (
    <>
      <Head>
        <title>Ngodingo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main {...attr.Main}>
        {children}
      </main> 
    </>
  )
}