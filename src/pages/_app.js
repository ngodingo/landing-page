// styles
import '../styles/globals.css'

// components
import { tidyTw } from '../utilts/tidy-tailwind'

// next-font
import { Lexend_Deca } from '@next/font/google'
const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca'
})



export default function App({ Component, pageProps }) {

  const globalTwStyles = tidyTw({
    nextFontTwSetup: lexend_deca.variable,
    typography: 'font-lexend-deca selection:bg-accent-10',
  })

  return (
    <div className={globalTwStyles}>
      <Component {...pageProps} />
    </div>
  )
}