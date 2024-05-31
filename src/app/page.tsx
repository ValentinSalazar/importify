
import FifthSection from "./components/sections/fifth/FifthSection";
import Footer from "./components/sections/footer/Footer";
import FourthSection from "./components/sections/fourth/FourthSection";
import Main from "./components/sections/main/Main";
import SecondSection from "./components/sections/second/SecondSection";
import ThirdSection from "./components/sections/third/ThirdSection";
import BandaMarca from "./ui/BandaMarca";
import Navbar from "./ui/Navbar/Navbar";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <SecondSection />
      <BandaMarca />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  );
}
