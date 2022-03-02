import HeaderTop from "./HeaderTop";
import HeaderUpper from "./HeaderUpper";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <HeaderTop />
      <HeaderUpper />
    </header>
  );
};

export default MainHeader;
