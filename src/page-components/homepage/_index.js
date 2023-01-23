import { HtmlHead } from "./htmlHead";
import { Navbar } from "../../components/organisms/navbar";
import { HeroSection } from "./Hero";
import { AboutUs } from "./AboutUs";
import { VisiMisi } from "./VisiMisi";
import { Characteristic } from "./Characteristic";
import { Blog } from "./Blogs";
import { Portfolio } from "./Portfolio";
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

