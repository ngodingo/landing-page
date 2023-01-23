// styles
import '../styles/globals.css'
import AppWrapper from '../App/_app/'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
