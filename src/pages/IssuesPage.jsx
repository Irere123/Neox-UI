import React from "react";
import { graphql } from "react-apollo";

import { meQuery } from "../graphql/team";
import "../styles/IssuesPage.css";
import Header from "../components/Header";
import Feed from "../modules/issues/dashboard/Feed";
import AdsWidget from "../modules/issues/dashboard/AdsWidget";
import HeadBarBottom from "../modules/issues/dashboard/HeadBarBottom";
import Loader from "../components/Loader";

function Home({ data: { loading, me } }) {
  if (loading) {
    return <Loader />;
  }

  const { id: userId, username, teams } = me;

  const teamIds = teams.map((t) => ({
    id: t.id,
  }));

  return (
    <div>
      <Header username={username} />
      <div className="homepage_layout">
        <div
          className="left-layout-header"
          style={{ overflow: "hidden", position: "sticky" }}
        >
          <HeadBarBottom
            teams={teams.map((t) => ({
              id: t.id,
              letter: t.name.charAt(0).toUpperCase(),
            }))}
            teamsName={teams}
            userId={userId}
            teamIds={teamIds.map(({ id }) => id)}
          />
        </div>
        <div className="left-layout">
          <Feed teams={teamIds.map(({ id }) => id)} />
        </div>
        <div className="right-layout">
          <AdsWidget />
        </div>
      </div>
    </div>
  );
}

export default graphql(meQuery)(Home);
