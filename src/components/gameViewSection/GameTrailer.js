import { useState } from "react";
import ModalVideo from "react-modal-video";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "./GameTrailer.css";

import VideoTrailerImage from "../../assets/images/resources/video-trailer-image.jpg";

const GamerTrailer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="gamer-trailer">
      {/* Game Trailer Title */}
      <div className="sec-title text-center">
        <h2>What to expect?</h2>
        <span className="bottom-curve"></span>
      </div>

      {/* Game Trailer Box */}
      <div className="trailer-video-box">
        <figure className="image">
          <img src={VideoTrailerImage} alt="" title="" />
        </figure>
        <span className="lightbox-image over-link">
          <div className="icon" onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </span>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="ticp6ScuyLY"
          onClose={() => setOpen(false)}
          width="100%"
        />
      </div>
    </div>
  );
};

export default GamerTrailer;
