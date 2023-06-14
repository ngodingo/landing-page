import { ttw } from "common/utils"
import { Button } from "@components"
import { useRouter } from 'next/router'


export function ComingSoon() {
  const router = useRouter()
  const styles = twStyles();

  function handleBtnClick(e) {
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

function twStyles() {
  return ({
    Container: [
      'h-screen flex flex-col justify-center items-center text-center'
    ],
    Title: [
      'text-heading-1 font-semibold text-secondary-90'
    ],
    Desc: [
      'text-body-2 text-secondary-90'
    ],
    Button: [
      'mt-4'
    ]
  })
}