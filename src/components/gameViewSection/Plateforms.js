import { Row } from "react-bootstrap";
import PlateformBlock from "./PlateformBlock";
import "./Plateforms.css";

const Plateforms = () => {
  return (
    <div className="plateforms">
      <Row className="clearfix">
        <PlateformBlock icon="forum" title="private forum" />
        <PlateformBlock icon="discord" title="private discord" />
        <PlateformBlock icon="telegram" title="private telegram" />
        <PlateformBlock icon="community" title="exclusive community" />
      </Row>
    </div>
  );
};
export default Plateforms;
