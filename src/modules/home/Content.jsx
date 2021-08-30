import React from "react";
import { Avatar } from "@material-ui/core";
import { Comment, Favorite, Share } from "@material-ui/icons";

import "../../styles/Home.css";

function Content({ username, createdAt }) {
  return (
    <>
      <div className="ContentCard__maiPage">
        <div className="ContentCard__maiPage_header">
          <Avatar>HJ</Avatar>
          <div className="ContentCard__mainPage">
            <h3>{username}</h3>
            <h4>{createdAt}</h4>
          </div>
        </div>
        <div className="ContentCard__maiPage_content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            perferendis quod quibusdam facere nulla, eius error reprehenderit
            similique. Reiciendis obcaecati veniam dolor, ratione aut magni
            officiis illo dicta dolorum eveniet!
          </p>
        </div>
        <div className="ContentCard__maiPage_footer">
          <div className="ContentCard__maiPage_footer_icon_word">
            <Favorite />
            <h4>Like</h4>
          </div>
          <div className="ContentCard__maiPage_footer_icon_word">
            <Comment />
            <h4>Comment</h4>
          </div>
          <div className="ContentCard__maiPage_footer_icon_word">
            <Share />
            <h4>Share</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
