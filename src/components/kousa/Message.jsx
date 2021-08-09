import React from "react";

import RenderText from "../RenderText";
import "../../styles/kousa/Message.css";

const Message = ({ message: { url, text, filetype } }) => {
  if (url) {
    if (filetype.startsWith("image/")) {
      return (
        <div className="image-message">
          <img src={url} alt="" />
        </div>
      );
    } else if (filetype === "text/plain") {
      return <RenderText url={url} />;
    } else if (filetype.startsWith("audio/")) {
      return (
        <div className="audio-message">
          <audio controls>
            <source src={url} />
          </audio>
        </div>
      );
    } else if (filetype.startsWith("video/")) {
      return (
        <div className="video-message">
          <video controls src={url}></video>
        </div>
      );
    }
  }
  return <p>{text}</p>;
};

export default Message;
