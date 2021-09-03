import React from "react";
import { graphql } from "react-apollo";

import "../styles/Home.css";
import Header from "../components/Header";
import Sidebar from "../modules/home/Sidebar";
import MainPageContainer from "../controllers/MainPageController";
import { meQuery } from "../graphql/team";

function Main({ data: { me, loading } }) {
  if (loading) {
    return null;
  }

  const { username } = me;

  return (
    <>
      <Header username={username} />
      <div className="mainPage__layout">
        <div className="mainPageSidebar">
          <Sidebar />
        </div>
        <div className="mainPageMain__container">
          <MainPageContainer />
        </div>
      </div>
    </>
  );
}

export default graphql(meQuery)(Main);
