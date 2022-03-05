import HeaderTop from "./HeaderTop";
import HeaderUpper from "./HeaderUpper";
import "./MainHeader.css";
import StickyHeader from "./StickyHeader";

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
