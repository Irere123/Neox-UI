import React from "react";

import "../styles/MainPage.css";
import Header from "../components/main/Header";
import PostCard from "../components/main/Content";

function MainPageContainer() {
  return (
    <div>
      <Header />
      <div className="MainPage__content__container">
        <div className="posts">
          <PostCard
            createdAt="created on July 2021"
            username="Mark Zuckerberg"
          />
          <PostCard createdAt="created on June 2021" username="Surge SH" />
        </div>
      </div>
    </div>
  );
}

export default MainPageContainer;
