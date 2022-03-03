import { Container } from "react-bootstrap";
import "./BannerSection.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Img1 from "../../assets/images/1.jpeg";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <OwlCarousel
        className="banner-carousel owl-theme"
        autoplay
        items="1"
        dots={false}
      >
        <div className="slide-item">
          {/* <img src={Img1} alt="" /> */}
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${Img1})` }}
          ></div>

          <Container className="d-flex justify-content-center align-items-center">
            <div className="content-box">
              <div className="content">
                <div className="upper-subtitle textured-text">
                  - NFT Freaks x Mentalist420 -
                </div>
                <h1>
                  <span className="textured-text">NFT Academy</span>
                </h1>
                <div className="lower-subtitle textured-text">
                  - Only 500 keys available -
                </div>
              </div>
            </div>
          </Container>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;
