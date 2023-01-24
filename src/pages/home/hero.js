import styles from "./hero-style"
import { ttw } from "@utilts"

import { Container} from "@components/layout"
import { Button } from "@components/ui"


export function Hero () {
  return (
    <section className={ttw(styles.Section)}>
      <Container className={ttw(styles.Container)}>
        <div className={ttw(styles.Wrapper)}>
          <h1 className={ttw(styles.DisplayText)}>
            Learn Together, Make
            <span className="inline sm:hidden" children={" "} />
            <br className='hidden sm:inline' />
            it Flexible
          </h1>
          <div className={ttw(styles.ButtonGroup)}>
            <Button href="/">
              Join Us
            </Button>
            <Button href="/#about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <Background />
    </section>
  )
}


/** PARTS */
function Background () {
  return (
    <div className={ttw(styles.Background.Container)}>
      <div className={ttw(styles.Background.Wrapper)}>
        <span className={ttw(styles.Background.Circle1)} />
        <span className={ttw(styles.Background.Circle2)} />
      </div>
    </div>
  )
}