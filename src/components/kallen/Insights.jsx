import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Avatar } from "@material-ui/core";
import dayjs from "dayjs";

import "../../styles/kallen/Insights.css";

const timeNow = dayjs();

function Insights({ data: { loading, getIssue }, username }) {
  if (loading) {
    return null;
  }

  console.log(getIssue);

  return (
    <div className="insights-layout">
      <div className="card-insights">
        <div className="top-card-insights">
          <Avatar>
            {getIssue.user.username.charAt(0).toUpperCase()}
            {getIssue.user.username
              .charAt(Math.floor(getIssue.user.username.length / 3))
              .toUpperCase()}
          </Avatar>
          <div className="top-card-insights-left">
            <h3>{getIssue.user.username}</h3>
            {username === getIssue.user.username ? (
              <button>Delete</button>
            ) : (
              <button>{getIssue.category}</button>
            )}
          </div>
        </div>
        <div className="teams-insights">
          <h2>Team</h2>
          <div className="teams_list_insights">
            <div className="team_insights">
              {getIssue.team.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3>{getIssue.team.name}</h3>
            </div>
          </div>
          <h2>Contributors</h2>
          <h4 style={{ color: "#c9d1d9" }}>
            The people who particapate in your discussion and publish finds are
            contributors
          </h4>
        </div>
      </div>
      <div className="insights-left-panel">
        <div className="insights-panel-header">
          <h1>
            {dayjs(getIssue.created_at).format("MMMM DD, YYYY")} –
            {dayjs(timeNow).format("MMMM DD, YYYY")}
          </h1>
        </div>
        <div className="insights-panel-content">
          <h3>Overview</h3>
          <div className="stats-panel-insights">
            <h2>{getIssue.cCount} Contributors</h2>
            <h2>{getIssue.dCount} Discussions</h2>
            <h2>{getIssue.fCount} Finds</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const getIssueQuery = gql`
  query ($issueId: ID!) {
    getIssue(issueId: $issueId) {
      team {
        name
      }
      user {
        username
      }
      fCount
      dCount
      cCount
      created_at
      category
    }
  }
`;

export default graphql(getIssueQuery, {
  options: (props) => ({
    variables: {
      issueId: props.issueId,
    },
    fetchPolicy: "network-only",
  }),
})(Insights);
