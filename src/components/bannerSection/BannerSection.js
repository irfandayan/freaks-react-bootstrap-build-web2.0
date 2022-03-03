import { Container } from "react-bootstrap";
import "./BannerSection.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Img1 from "../../assets/images/1.jpeg";
import Img2 from "../../assets/images/1.jpeg";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <OwlCarousel
        className="banner-carousel owl-theme"
        autoplay
        items="1"
        dots={false}
      >
        {/* Slide Item #1 */}
        <div className="slide-item">
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
        {/* Slide Item #2 */}
        <div className="slide-item">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${Img2})` }}
          ></div>

          <Container className="d-flex justify-content-center align-items-center">
            <div className="content-box">
              <div className="content">
                <div className="upper-subtitle textured-text">
                  - NFT Freaks x Mentalist421 -
                </div>
                <h1>
                  <span className="textured-text">NFT Academy</span>
                </h1>
                <div className="lower-subtitle textured-text">
                  - Only 1500 keys available -
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
