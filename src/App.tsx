import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageLoader from "./components/PageLoader";
import Topbar from "./components/Topbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import MainGallery from "./pages/MainGallery";

function App() {
  return (
    <Router>
      <PageLoader />
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<MainGallery />} />

        {/* <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Technicians />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/404" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
