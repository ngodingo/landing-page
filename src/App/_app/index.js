import { styles } from "./Global-style"
import { ttw } from "../../utilts/tidyTailwind"
import { GlobalHtmlHead } from "./GlobalHtmlHead"

export default function AppWrapper ({children}) {

  return (
    <>
      <GlobalHtmlHead />
      <main className={ttw(styles.Global)} >
        {children}
      </main>
    </>
  )
}