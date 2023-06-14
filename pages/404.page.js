export default function Custom404 () {
  const styles = twStyles()

  return (
    <section className={styles.Section}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Heading}>404</h1>
        <p className={styles.Desc}>This page could not be found.</p>
      </div>
    </section>
  )
}

function twStyles () {
  return ({
    Section: 'w-full h-screen bg-primary-30 grid place-items-center',
    Wrapper: 'text-center text-white',
    Heading: 'font-semibold text-display-3 sm:text-display-2 md:text-display-1',
    Desc: 'text-body-2'
  })
}