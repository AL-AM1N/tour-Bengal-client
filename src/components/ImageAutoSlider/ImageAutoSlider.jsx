import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// Component styles
import "./ImageAutoSlider.css";

import slide1 from "../../assets/Images/AutoSliderImage/slide1.jpeg";
import slide2 from "../../assets/Images/AutoSliderImage/slide2.jpeg";
import slide3 from "../../assets/Images/AutoSliderImage/slide3.jpeg";
import slide4 from "../../assets/Images/AutoSliderImage/slide4.jpeg";
import slide5 from "../../assets/Images/AutoSliderImage/slide5.jpeg";
import slide6 from "../../assets/Images/AutoSliderImage/slide6.jpeg";
import slide7 from "../../assets/Images/AutoSliderImage/slide7.jpeg";
import slide8 from "../../assets/Images/AutoSliderImage/slide8.jpeg";
import slide9 from "../../assets/Images/AutoSliderImage/slide9.jpeg";
import slide10 from "../../assets/Images/AutoSliderImage/slide10.jpeg";
import slide11 from "../../assets/Images/AutoSliderImage/slide11.jpeg";
import slide12 from "../../assets/Images/AutoSliderImage/slide12.jpeg";
import slide13 from "../../assets/Images/AutoSliderImage/slide13.jpeg";
import slide14 from "../../assets/Images/AutoSliderImage/slide14.jpeg";
import slide15 from "../../assets/Images/AutoSliderImage/slide15.jpeg";

function ImageAutoSlider() {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
    slide15,
  ];

  return (
    <div className="image-auto-slider">
        <h1 className="text-3xl text-center font-bold pb-10">Our Happy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                    Travelers
                </span> </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageAutoSlider;
