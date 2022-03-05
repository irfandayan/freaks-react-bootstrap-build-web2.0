import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";

import MainHeader from "./components/mainHeader/MainHeader";
import BannerSection from "./components/bannerSection/BannerSection";
import GameViewSection from "./components/gameViewSection/GameViewSection";
// import ReivewSection from "./components/reviewSection/ReivewSection";
import ReivewsSection from "./components/reviewSection/ReivewsSection";
import FeaturedGame from "./components/featuredGame/FeaturedGame";
import ParallaxSection from "./components/parrallaxSection/ParallaxSection";
import FaqSection from "./components/faqSection/FaqSection";
import MainFooter from "./components/mainFooter/MainFooter";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <ClipLoader color={"#ff7a21"} loading={loading} size={45} />
        </div>
      ) : (
        <>
          <MainHeader />
          <BannerSection />
          <GameViewSection />
          <ReivewsSection />
          <FeaturedGame />
          <ParallaxSection />
          <FaqSection />
          <MainFooter />
        </>
      )}
    </>
  );
}

export default App;
