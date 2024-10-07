import React, { useRef, useState } from "react";
import "../../styles/Video.css";
import { GoPlay } from "react-icons/go";
import "/src/styles/Video.css";

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="video">
      <div className="video-img">
        <video
          ref={videoRef}
          className={`video-element ${isPlaying ? "playing" : ""}`}
          muted
          onClick={handleVideoClick}
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/4fcae382aa4c4a5a9694b1bb84095942.mp4"
            type="video/mp4"
            className="video-play"
          />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button className="play-button" onClick={handlePlay}>
            <GoPlay className="play-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Video;
