import { Col } from "react-bootstrap";
import "./AwardBlock.css";

const AwardBlock = ({ upperTitle, lowerTitle }) => {
  return (
    <Col lg={3} md={6} sm={12} className="award-block">
      <div className="award-block__inner">
        <div className="upper-title">{upperTitle}</div>
        <div className="lower-title">{lowerTitle}</div>
      </div>
    </Col>
  );
};

export default AwardBlock;
