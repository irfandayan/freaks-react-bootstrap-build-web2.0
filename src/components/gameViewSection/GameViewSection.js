import { Container } from "react-bootstrap";
import Plateforms from "./Plateforms";
import GameTrailer from "./GameTrailer";
import GameAwards from "./GameAwards";
import "./GameViewSection.css";

const GameViewSection = () => {
  return (
    <div className="game-view-section">
      <div className="top-pattern-layer"></div>
      <Container>
        <Plateforms />
        <GameTrailer />
        <GameAwards />
      </Container>
    </div>
  );
};

export default GameViewSection;
