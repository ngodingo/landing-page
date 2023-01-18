// styles
import '../styles/globals.css'
import AppWrapper from '../page-components/_app/_index'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
