import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ReivewsSection.css";

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

        <div className="reviews-section__slider-wrapper">
          <Swiper
            onSwiper={setActiveThumb}
            autoplay
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Autoplay, Pagination, Navigation, Thumbs]}
            className="review-images-slider-thumbs"
          >
            <SwiperSlide>
              <div className="review-thumbs">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-thumbs">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-thumbs">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-thumbs">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-thumbs">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            loop={true}
            autoplay
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="review-text-slider"
          >
            <SwiperSlide>
              <div className="review-text">
                <p>
                  Slide 1 Create and establish a exclusive community which
                  understands both the concept of worth and value in NFT art
                  works.&nbsp; &nbsp;
                </p>
                <h2>
                  <span>Goal</span>&nbsp;&nbsp;-&nbsp;&nbsp;#1
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-text">
                <p>
                  Slide 2 Create and establish a exclusive community which
                  understands both the concept of worth and value in NFT art
                  works.&nbsp; &nbsp; &nbsp;
                </p>
                <h2>
                  <span>Goal</span>&nbsp;&nbsp;-&nbsp;&nbsp;#2
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-text">
                <p>
                  Slide 3 Create and establish a exclusive community which
                  understands both the concept of worth and value in NFT art
                  works.&nbsp; &nbsp; &nbsp;
                </p>
                <h2>
                  <span>Goal</span>&nbsp;&nbsp;-&nbsp;&nbsp;#3
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-text">
                <p>
                  Slide 4 Create and establish a exclusive community which
                  understands both the concept of worth and value in NFT art
                  works.&nbsp; &nbsp; &nbsp;
                </p>
                <h2>
                  <span>Goal</span>&nbsp;&nbsp;-&nbsp;&nbsp;#4
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-text">
                <p>
                  Slide 5 Create and establish a exclusive community which
                  understands both the concept of worth and value in NFT art
                  works.&nbsp; &nbsp; &nbsp;
                </p>
                <h2>
                  <span>Goal</span>&nbsp;&nbsp;-&nbsp;&nbsp;#5
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ReivewSection;
