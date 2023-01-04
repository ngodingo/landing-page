import '../styles/globals.css'

// font
import { Lexend_Deca } from '@next/font/google'
const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca'
})


export default function App({ Component, pageProps }) {
  const globalTwStyles = `${lexend_deca.variable} font-lexend-deca selection:bg-accent-10`

  return (
    <div className={globalTwStyles}>
      <Component {...pageProps} />
    </div>
  )
}
