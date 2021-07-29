import React from "react";

function Header({ channelName }) {
  return (
    <div className="titlebar__header">
      <div className="titlebar__headerContent">
        <span className="title__hashTag">#</span>
        <h2> {channelName}</h2>
      </div>
    </div>
  );
}

export default Header;
