import React from "react";
import { graphql } from "react-apollo";

import { meQuery } from "../graphql/team";
import Header from "../components/Header";
import IssueContainer from "../containers/IssueContainer";
import "../styles/Issue.css";
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
        <IssueContainer issueId={issueId} userId={id} username={username} />
      </div>
    </div>
  );
}

export default graphql(meQuery)(Issue);
