import { Col, Container, Row } from "react-bootstrap";
import "./FeaturedGame.css";

import featuredImage from "../../assets/images/featured-image-27.jpg";

const FeaturedGame = () => {
  return (
    <div className="featured-game">
      <div className="bottom-pattern-layer"></div>
      <Container>
        <Row className="clearfix">
          <Col lg={6} className="text-column">
            <div className="inner">
              <div className="sec-title">
                <h2>Create a Brand</h2>
                <span className="bottom-curve"></span>
              </div>
              <div className="text">
                Learn how to create a digital art brand which comes from primary
                1/1 mints into the building and understanding of your overall
                art program (which we help create and identify based off your
                skillset). Together we help shape your future by outlining your
                goals using your creative vision to fuel longevity.
              </div>
              <div className="link-box">
                <a href="game-details.html" className="theme-btn btn-style-one">
                  <span className="btn-title">Mint Key Now</span>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6} className="images-column">
            <div className="inner">
              <div className="image-box">
                <img src={featuredImage} alt="" title="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedGame;
