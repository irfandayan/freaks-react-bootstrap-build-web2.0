import logo from "../../logo.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./HeaderUpper.css";

const HeaderUpper = () => {
  return (
    <div className="header-upper">
      <Container>
        <div className="header-upper__inner">
          <Navbar expand="lg" className="justify-content-between p-0">
            <Navbar.Brand
              className="p-0"
              href="#home"
              title="Freaks University - A NFT Academy"
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
                >
                  <span>Mint Now</span>
                </Nav.Link>
                <Nav.Link
                  href="#opensea"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Opensea</span>
                </Nav.Link>
                <Nav.Link
                  href="#discord"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Discord</span>
                </Nav.Link>
                <Nav.Link
                  href="#telegram"
                  className="navigation__link  text-uppercase p-0"
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

                <Nav.Link
                  href="https://www.youtube.com/channel/nftfreaks"
                  target="_blank"
                  className="navigation-social__link d-flex justify-content-center align-items-center ms-3  text-uppercase fs-4"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Nav.Link>
              </Nav>
            </Navbar>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default HeaderUpper;
