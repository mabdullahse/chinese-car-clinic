import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader";
import Services from "../components/Distinction";
import Topbar from "../components/Topbar";
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
