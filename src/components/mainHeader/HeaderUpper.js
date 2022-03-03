import { Container, Navbar, Nav, Image } from "react-bootstrap";
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
                src="/images/logo.png"
                alt="Freaks University - A NFT Academy"
                title="Freaks University - A NFT Academy"
              />
            </Navbar.Brand>

            <Navbar id="basic-navbar-nav" className="navigation p-0">
              <Nav className="me-auto navigation__inner">
                <Nav.Link
                  href="#home"
                  className="navigation__link  active text-uppercase p-0"
                >
                  <span>Mint Now</span>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Opensea</span>
                </Nav.Link>
                <Nav.Link
                  href="#home"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Discord</span>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Telegram</span>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="navigation__link  text-uppercase p-0"
                >
                  <span>Forum</span>
                </Nav.Link>
              </Nav>

              <Nav className="navigation-social">
                <Nav.Link
                  href="#home"
                  className="text-white text-uppercase fs-4"
                >
                  Twitter
                </Nav.Link>

                <Nav.Link
                  href="#home"
                  className="text-white text-uppercase fs-4"
                >
                  Instagram
                </Nav.Link>

                <Nav.Link
                  href="#home"
                  className="text-white text-uppercase fs-4"
                >
                  Youtube
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
