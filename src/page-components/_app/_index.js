// hooks
import { tidyTw } from '../../utilts/tidy-tailwind'

// next-font
import { Lexend_Deca } from '@next/font/google'
const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: 'variable',
  variable: '--font-lexend-deca',
})


export default function AppWrapper ({children}) {

  const globalTwStyles = tidyTw({
    nextFontTwSetup: lexendDeca.variable,
    typography: 'font-lexend-deca selection:bg-accent-10',
  })

  return (
    <main className={globalTwStyles} >
      {children}
    </main>
  )
}