import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./MainFooter.css";
import ScrollToTop from "./ScrollToTop";

const MainFooter = () => {
  return (
    <>
      <div className="main-footer">
        <div className="top-pattern-layer-dark"></div>

        <Container>
          <div className="widgets-section"></div>
        </Container>

        <div className="footer-bottom">
          <Container>
            <div className="outer-container">
              <div className="bottom-shape-box">
                <div className="bg-shape"></div>
              </div>

              <Container>
                <Row className="clearfix">
                  <Col lg={6}>
                    <div className="copyright">
                      Powered by{" "}
                      <a href="http://www.5kblocks.com">5,000 Blocks</a> - A
                      Web3 Company
                    </div>
                  </Col>
                  <Col lg={6} className="d-flex justify-content-end">
                    <Navbar className="navigation p-0">
                      <Nav className="navigation-social">
                        <Nav.Link
                          href="https://twitter.com/nftfreaks"
                          target="_blank"
                          className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </Nav.Link>

                        <Nav.Link
                          href="https://www.instagram.com/nftfreaks/"
                          target="_blank"
                          className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </Nav.Link>
                      </Nav>
                    </Navbar>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default MainFooter;
