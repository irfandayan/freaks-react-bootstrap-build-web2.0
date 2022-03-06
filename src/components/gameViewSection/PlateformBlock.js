import { Col } from "react-bootstrap";
import "./PlateformBlock.css";

const PlateformBlock = ({ icon, title }) => {
  const PlateformTitle = title.split(" ");

  return (
    <Col lg={3} md={4} sm={6} className="plateform-block">
      <div className="plateform-block__inner">
        <div className={`plateform-block__title ${icon}-icon`}>
          <div>{PlateformTitle[0]}</div>
          <div>{PlateformTitle[1]}</div>
        </div>
        <a href="#forum" className="plateform-block__over-link">
          &nbsp;
        </a>
      </div>
    </Col>
  );
};

export default PlateformBlock;
