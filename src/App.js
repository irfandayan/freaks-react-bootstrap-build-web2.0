import logo from "./logo.svg";

import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";
import MainHeader from "./components/mainHeader/MainHeader";
import BannerSection from "./components/bannerSection/BannerSection";

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
        </>
      )}
    </>
  );
}

export default App;
