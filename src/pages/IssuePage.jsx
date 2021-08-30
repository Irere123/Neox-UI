import React from "react";
import { graphql } from "react-apollo";

import { meQuery } from "../graphql/team";
import Header from "../components/Header";
import IssueController from "../controllers/IssueController";
import "../styles/IssuePage.css";
import Loader from "../components/Loader";

function Issue({
  data: { loading, me },
  match: {
    params: { issueId },
  },
}) {
  if (loading) {
    return <Loader />;
  }

  const { id, username } = me;

  return (
    <div>
      <Header username={username} />
      <div className="issue-layout">
        <IssueController issueId={issueId} userId={id} username={username} />
      </div>
    </div>
  );
}

export default graphql(meQuery)(Issue);
