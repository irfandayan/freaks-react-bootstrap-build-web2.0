import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper";

import { Container } from "react-bootstrap";

import "./ReivewSection.css";

import img1 from "../../assets/images/1.jpeg";

const ReivewSection = () => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className="reviews-section">
      <div className="top-pattern-layer-dark"></div>
      <div className="bottom-pattern-layer-dark"></div>
      <Container>
        <div className="sec-title">
          <h2>Our Mission</h2>
          <span className="bottom-curve"></span>
        </div>

        <Swiper
          loop={true}
          autoplay
          spaceBetween={10}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
        >
          <SwiperSlide>
            Slide 1 Create and establish a exclusive community which understands
            both the concept of worth and value in NFT art works.
          </SwiperSlide>
          <SwiperSlide>
            Slide 2 Create and establish a exclusive community which understands
            both the concept of worth and value in NFT art works.
          </SwiperSlide>
          <SwiperSlide>
            Slide 3 Create and establish a exclusive community which understands
            both the concept of worth and value in NFT art works.
          </SwiperSlide>
          <SwiperSlide>
            Slide 4 Create and establish a exclusive community which understands
            both the concept of worth and value in NFT art works.
          </SwiperSlide>
          <SwiperSlide>
            Slide 5 Create and establish a exclusive community which understands
            both the concept of worth and value in NFT art works.
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setActiveThumb}
          autoplay
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          className="product-images-slider-thumbs"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default ReivewSection;
