import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../logo.png";

import "./MobileMenu.css";
import { Nav } from "react-bootstrap";

const MobileMenu = ({ setShowMobileMenu, showMobileMenu }) => {
  return (
    <>
      {/* {showMobileMenu && ( */}
      <div className={`mobile-menu ${showMobileMenu && "show-mobile-menu"}`}>
        <div
          className={`menu-backdrop ${showMobileMenu && "show-menu-backdrop"}`}
        ></div>
        <div className="close-btn" onClick={setShowMobileMenu}>
          <FontAwesomeIcon icon={faClose} />
        </div>

        <nav className={`menu-box ${showMobileMenu && "show-menu-box"}`}>
          <div className="menu-box__inner">
            <div className="menu-box__container">
              <div className="nav-logo">
                <a href="#home">
                  <img
                    className="nav-log__image"
                    src={logo}
                    alt=""
                    rel="noreferrer"
                  />
                </a>
              </div>
              <div className="menu-outer">
                <div className="collapse navbar-collapse clearfix">
                  <ul className="mb-navigation clearfix">
                    <li className="current dropdown">
                      <a href="#Mint" rel="noreferrer">
                        {" "}
                        Mint Now
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#OpenSea" rel="noreferrer">
                        {" "}
                        OpenSea
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#Discord" rel="noreferrer">
                        Discord
                      </a>
                    </li>{" "}
                    <li className="dropdown">
                      <a href="#Telegram" rel="noreferrer">
                        Telegram
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#Forum" rel="noreferrer">
                        {" "}
                        Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Social navigation needs to be separate components */}
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
            </div>
          </div>
        </nav>
      </div>
      {/* )} */}
    </>
  );
};

export default MobileMenu;
