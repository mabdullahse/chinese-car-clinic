import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const brands = [
  { name: "MG", img: "/img/brands/mg.jpg" },
  { name: "Changan", img: "/img/brands/changan.jpg" },
  { name: "Geely", img: "/img/brands/geely.jpg" },
  { name: "Haval", img: "/img/brands/haval.jpg" },
  { name: "Chery", img: "/img/brands/chery.jpg" },
  { name: "Jetour", img: "/img/brands/jetour.png" },
  { name: "GAC Motor", img: "/img/brands/gac.jpg" },
  { name: "Bestune", img: "/img/brands/bestune.png" },
  { name: "GWM", img: "/img/brands/gwm.jpeg" },
  { name: "Maxus", img: "/img/brands/maxus.jpg" },
];
const BrandSlider = () => {
  return (
    <div className="  p-6  max-w-xs mx-auto  ">
      <h2 className="h6 text-center text-muted mb-4 fw-medium">
        We Provide Services for All These Chinese Car Brands
      </h2>

      <Swiper
        direction="horizontal"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        style={{ height: "103px", textAlign: "-webkit-center" }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="logo-container">
              <img src={brand.img} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
