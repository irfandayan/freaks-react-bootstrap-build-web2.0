import "./ParallaxSection.css";

import ParallaxIamge from "../../assets/images/parallax-bg.jpg";
import { Container, Row } from "react-bootstrap";

const ParallaxSection = () => {
  return (
    <div className="parallax-section">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${ParallaxIamge})` }}
      ></div>
      <Container>
        <Row>
          <div className="content-box">
            <h2>CREATING NFT LEGENDS</h2>
            <div className="text-box">
              We understand you know how to make and create art. Let us show you
              how to structure your art works into a organized program which
              allows you to stick out from the rest of the crowd.
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ParallaxSection;
