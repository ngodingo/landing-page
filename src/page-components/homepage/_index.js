import { HtmlHead } from "./htmlHead";
import { Navbar } from "../../components/navbar";
import { HeroSection } from "./hero";
import { AboutUs } from "./about-us";
import { VisiMisi } from "./visi-misi";
import { Characteristic } from "./characteristic";
import { Blog } from "./blogs";
import { Portfolio } from "./portfolio";

export default function Homepage () {
  return (
    <>
      <HtmlHead />
      
      <Navbar />
      <HeroSection />
      <AboutUs />
      <VisiMisi />
      <Characteristic />
      <Blog />
      <Portfolio />
      {/* <Footer /> */}
    </>
  )
}

