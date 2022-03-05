import StickyHeader from "./StickyHeader";
import HeaderTop from "./HeaderTop";
import HeaderUpper from "./HeaderUpper";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <StickyHeader />
      <HeaderTop />
      <HeaderUpper />
    </header>
  );
};

export default MainHeader;
