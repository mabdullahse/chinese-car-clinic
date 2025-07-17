import BrandSlider from "../components/BrandSlider";
import Carousel from "../components/Carousel";

import Services from "../components/Distinction";

import Gallery from "../components/Gallery";
import QRCodeGenerator from "../components/QRCodeGenerator";
import QrCodeLinks from "../components/QrCodeLinks";

function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <Carousel />
      {/* <!-- Carousel End --> */}
      <Services />

      <BrandSlider />

      <QrCodeLinks />
      {/* <QRCodeGenerator /> */}
      <Gallery />
    </>
  );
}

export default Home;
