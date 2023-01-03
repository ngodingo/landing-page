import '../styles/globals.css'

// font
import { Lexend_Deca } from '@next/font/google'
const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca'
})

export default function App({ Component, pageProps }) {
  return (
    <div className={lexend_deca.variable}>
      <Component {...pageProps} />
    </div>
  )
}
