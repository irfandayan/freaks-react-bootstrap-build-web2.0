import { Row } from "react-bootstrap";
import AwardBlock from "./AwardBlock";
import "./GameAwards.css";

const GameAwards = () => {
  return (
    <div className="game-awards">
      <div className="sec-title centered">
        <h2>4 Levels of Admission</h2>
        <span className="bottom-curve"></span>
      </div>

      <div className="awards">
        <Row className="clearfix">
          <AwardBlock upperTitle="Level One" lowerTitle="Exclusive Community" />
          <AwardBlock
            upperTitle="Level Two"
            lowerTitle="Level 1+ VIP Channels"
          />
          <AwardBlock
            upperTitle="Level Three"
            lowerTitle="Level 1+2 Dev Access"
          />
          <AwardBlock
            upperTitle="Level Four"
            lowerTitle="Level 1 + 2 + 3 Direct Access"
          />
        </Row>
      </div>
    </div>
  );
};

export default GameAwards;
