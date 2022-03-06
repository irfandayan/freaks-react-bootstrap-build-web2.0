import { useEffect, useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
import StickyHeader from "./StickyHeader";
import HeaderTop from "./HeaderTop";
import HeaderUpper from "./HeaderUpper";

import "./MainHeader.css";

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const setShowMobileMenuHandler = () => {
    // alert("Show/Hide Menu");
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };
  return (
    <header className="main-header">
      <StickyHeader />
      <HeaderTop />
      <HeaderUpper setShowMobileMenu={setShowMobileMenuHandler} />

      <MobileMenu
        setShowMobileMenu={setShowMobileMenuHandler}
        showMobileMenu={showMobileMenu}
      />
    </header>
  );
};

export default MainHeader;
