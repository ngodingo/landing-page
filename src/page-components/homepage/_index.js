import { HtmlHead } from "./htmlHead";
import { Navbar } from "../../components/organisms/navbar";
import { HeroSection } from "./hero";
import { AboutUs } from "./aboutUs";
import { VisiMisi } from "./visiMisi";
import { Characteristic } from "./characteristic";
import { Blog } from "./blogs";
import { Portfolio } from "./portfolio";
import { Footer } from "../../components/organisms/footer";

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
      <Footer />
    </>
  )
}

