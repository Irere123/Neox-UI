import React from "react";

import StoryReel from "./StoryReel";
import "../../styles/Home.css";

function Header() {
  return (
    <div>
      <h2 className="Trending">Your Feed</h2>
      <div className="stories">
        <StoryReel userLogo="BO" />
        <StoryReel userLogo="JB" />
        <StoryReel userLogo="MK" />
        <StoryReel userLogo="YT" />
      </div>
    </div>
  );
}

export default Header;
