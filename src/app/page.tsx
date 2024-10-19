
import FifthSection from "./(sections-home)/fifth/FifthSection";
import Footer from "./(sections-home)/footer/Footer";
import FourthSection from "./(sections-home)/fourth/FourthSection";
import Main from "./(sections-home)/main/Main";
import SecondSection from "./(sections-home)/second/SecondSection";
import ThirdSection from "./(sections-home)/third/ThirdSection";
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
