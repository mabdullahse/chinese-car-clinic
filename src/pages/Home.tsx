import Carousel from "../components/Carousel";

import Services from "../components/Distinction";

import Gallery from "../components/Gallery";
import QRCodeGenerator from "../components/QRCodeGenerator";

function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <Carousel />
      {/* <!-- Carousel End --> */}
      <Services />

      <QRCodeGenerator />
      <Gallery />
    </>
  );
}

export default Home;
