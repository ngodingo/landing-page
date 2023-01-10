import Head from "next/head";

import { Navbar } from "./navbar";
import { HeroSection } from "./hero";
import { AboutUs } from "./about-us";
import { VisiMisi } from "./visi-misi";
import { Characteristic } from "./characteristic";
import { Blog } from "./blogs";

export default function Homepage () {
  return (
    <>
      <HtmlHead />
      <main>
        <Navbar />
        <HeroSection />
        <AboutUs />
        <VisiMisi />
        <Characteristic />
        <Blog />
        {/* <Projects /> */}
        {/* <Footer /> */}
      </main>
    </>
  )
}

function HtmlHead () {
  return (
    <Head>
      <title>Ngodingo</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}