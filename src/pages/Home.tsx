import Carousel from "../components/Carousel";

import Services from "../components/Distinction";

import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <Carousel />
      {/* <!-- Carousel End --> */}
      <Services />

      <Gallery />
    </>
  );
}

export default Home;
