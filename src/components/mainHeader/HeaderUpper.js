import logo from "../../logo.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./HeaderUpper.css";

const HeaderUpper = ({ setShowMobileMenu, showMobileMenu }) => {
  return (
    <>
      <div className="header-upper">
        <Container>
          <div className="header-upper__inner">
            <Navbar expand="lg" className="justify-content-between p-0">
              <Navbar.Brand
                className="p-0"
                href="#home"
                title="Freaks University - A NFT Academy"
                rel="noreferrer"
              >
                <Image
                  src={logo}
                  alt="Freaks University - A NFT Academy"
                  title="Freaks University - A NFT Academy"
                />
              </Navbar.Brand>

              <Navbar id="basic-navbar-nav" className="navigation p-0">
                <Nav className="me-auto navigation__inner">
                  <Nav.Link
                    href="#home"
                    className="navigation__link active text-uppercase p-0"
                    rel="noreferrer"
                  >
                    <span>Mint Now</span>
                  </Nav.Link>
                  <Nav.Link
                    href="#opensea"
                    className="navigation__link  text-uppercase p-0"
                    rel="noreferrer"
                  >
                    <span>Opensea</span>
                  </Nav.Link>
                  <Nav.Link
                    href="#discord"
                    className="navigation__link  text-uppercase p-0"
                    rel="noreferrer"
                  >
                    <span>Discord</span>
                  </Nav.Link>
                  <Nav.Link
                    href="#telegram"
                    className="navigation__link  text-uppercase p-0"
                    rel="noreferrer"
                  >
                    <span>Telegram</span>
                  </Nav.Link>
                  <Nav.Link
                    href="#forum"
                    className="navigation__link  text-uppercase p-0"
                  >
                    <span>Forum</span>
                  </Nav.Link>
                </Nav>
                <div className="navigation-social__wrapper">
                  <Nav className="navigation-social">
                    <Nav.Link
                      href="https://twitter.com/nftfreaks"
                      target="_blank"
                      className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Nav.Link>

                    <Nav.Link
                      href="https://www.instagram.com/nftfreaks/"
                      target="_blank"
                      className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>

                    <Nav.Link
                      href="https://www.youtube.com/channel/nftfreaks"
                      target="_blank"
                      className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </Nav.Link>
                  </Nav>
                  <div
                    className="mobile-nav-toggler"
                    onClick={setShowMobileMenu}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>
              </Navbar>
            </Navbar>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderUpper;
