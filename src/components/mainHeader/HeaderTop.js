import { Container } from "react-bootstrap";

import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <Container>
        <div className="header-top__inner">
          <div className="header-top__left">
            <div class="header-top__left-text">Welcome to the NFT Academy</div>
          </div>
          <div className="header-top__right">
            <ul className="header-top__social">
              <li className="header-top__social-item">
                <a
                  className="header-top__social-link"
                  href="http://www.twitter.com/nftfreaks"
                  target="_blank"
                >
                  @nftfreaks
                </a>
              </li>
              <li className="header-top__social-item">
                <a
                  className="header-top__social-link"
                  href="http://www.twitter.com/mentalist420"
                  target="_blank"
                >
                  @mentalist420
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
