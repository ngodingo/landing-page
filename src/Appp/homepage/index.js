import { HtmlHead } from "./HtmlHead";
import { Navbar } from "../../common/components/ui/navbar/navbar";
import { HeroSection } from "./Hero";
import { AboutUs } from "./AboutUs";
import { VisiMisi } from "./VisiMisi";
import { Characteristic } from "./Characteristic";
import { Blog } from "./Blogs";
import { Portfolio } from "./Portfolio";
import { Footer } from "../../common/components/ui/footer/footer";

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