import Head from 'next/head'

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
    <>
      <DefaultHtmlHead />
      <main className={globalTwStyles} >
        {children}
      </main>
    </>
  )
}


function DefaultHtmlHead () {
  return (
    <Head>
      <title>Ngodingo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}