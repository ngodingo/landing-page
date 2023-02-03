import styles from "./coming-soon-style"
import { ttw } from "@utilts"

import { Button } from "@components"
import { useRouter } from 'next/router'


export function ComingSoon () {
  const router = useRouter()

  function handleBtnClick (e) {
    e.preventDefault()
    router.back()
  }

  return (
    <div className={ttw(styles.Container)}>
      <h1 className={ttw(styles.Title)}>
        Coming Soon
      </h1>
      <p className={ttw(styles.Desc)}>
        This page is under construction..🛠️
      </p>
      <Button 
        variant="primary" 
        href="" 
        className={ttw(styles.Button)} 
        onClick={handleBtnClick}
      >
        Go Back
      </Button>
    </div>
  )
}