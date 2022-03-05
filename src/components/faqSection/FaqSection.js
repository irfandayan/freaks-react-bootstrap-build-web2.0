import { Accordion, Container } from "react-bootstrap";
import "./FaqSection.css";

const FaqSection = () => {
  return (
    <div className="faq-section">
      <div className="top-pattern-layer"></div>
      <Container>
        <div className="sec-title centered">
          <h2>Question &amp; Answers</h2>
          <span className="bottom-curve"></span>
        </div>

        <div className="faq-container">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is it?</Accordion.Header>
              <Accordion.Body>
                <div className="text">
                  We are minting a total of 500 NFT dubbed keys and identified
                  by 4 rarity groups. The art is created by a well known artist
                  (Paul Massey) from the NFT community. Each NFT becomes a
                  membership to our exclusive program allowing different
                  educational perks for NFT collectors.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Why should I mint this project?{" "}
              </Accordion.Header>
              <Accordion.Body>
                <div className="text">
                  The art itself is a historical mint in terms of the artist and
                  the reputations of 3 individuals packed into one NFT. In one
                  mint you have already received more than your .25Ξ just from
                  the art work alone. The level of rarity determines access and
                  is restricted to a certain limited number per original
                  distribution. To HODL one of these NFT + the resources/content
                  & exclusive community makes this project almost top of its
                  class to mint in the NFT space (in terms of opportunity per
                  price point).
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How much does it cost?</Accordion.Header>
              <Accordion.Body>
                <div className="text">It costs .25Ξ to mint a NFT.</div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is the mint process?</Accordion.Header>
              <Accordion.Body>
                <div className="text">
                  A public sale will take place in which you are issued 1 token
                  out of 500 which includes a 7 day reveal once sell out occurs.
                  All tokens are issued at random.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How many total supply?</Accordion.Header>
              <Accordion.Body>
                <div className="text">There are a total of 500 NFT.</div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default FaqSection;
