import { useEffect, useState } from "react";
import logo from "../../sticky-logo.png";

import { Container, Navbar, Nav, Image } from "react-bootstrap";

import "./StickyHeader.css";

const StickyHeader = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    });
  }, []);

  return (
    <>
      {showStickyNav && (
        <div className="sticky-header show-sticky-header">
          <Container>
            <Container>
              <div className="sticky-header__inner">
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
                  </Navbar>
                </Navbar>
              </div>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default StickyHeader;
