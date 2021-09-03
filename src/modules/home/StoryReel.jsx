import React from "react";

import "../../styles/Home.css";

const StoryReel = ({ userLogo }) => {
  return (
    <div className="storyReels">
      <div className="storyReel">
        <div className="storyReel__user">
          <h2>{userLogo}</h2>
        </div>
      </div>
    </div>
  );
};

export default StoryReel;
