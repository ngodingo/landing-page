// next-font
import { Lexend_Deca } from '@next/font/google'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: 'variable',
  variable: '--font-lexend-deca',
})

const styles = {
  Global: {
    nextFontTwSetup: lexendDeca.variable,
    typography: 'font-lexend-deca selection:bg-accent-10',
  } 
}

export default styles