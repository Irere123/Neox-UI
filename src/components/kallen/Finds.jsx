import React, { useState } from "react";
import moment from "moment";
import { Avatar, Modal } from "@material-ui/core";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import "../../styles/kallen/Finds.css";
import Loader from "../Loader";
import PublishModal from "./PublishModal";
import { allFindsQuery } from "../../graphql/issue";

function Finds({ data: { loading, allFinds }, issueId, userId }) {
  const [open, setOpen] = useState(false);

  if (loading) {
    return <Loader />;
  }

  if (!allFinds.length) {
    return (
      <div className="issue-finds-layout">
        <div className="header-finds">
          <h2>People Finds</h2>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            <button className="btn_publish">Publish</button>
          </div>
        </div>
        <div className="no-issues">
          <h2>There are no findings for this issue yet..</h2>
        </div>
        {open && (
          <Modal open={open} onClose={() => setOpen(!open)}>
            <PublishModal
              onClose={() => setOpen(!open)}
              issueId={issueId}
              userId={userId}
            />
          </Modal>
        )}
      </div>
    );
  }

  return (
    <div className="issue-finds-layout">
      <div className="header-finds">
        <h2>People Finds</h2>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <button className="btn_publish">Publish</button>
        </div>
      </div>
      <div className="content-finds">
        {allFinds.map((f) => (
          <div className="discovery-card">
            <div className="discovery-card-header">
              <Avatar />
              <div className="user-details-card-header">
                <h2>{f.user.username}</h2>
                <h3>{moment(f.created_at).fromNow()}</h3>
              </div>
            </div>
            <div className="discovery-card-content">
              <p>{f.description}</p>
            </div>
            <div className="discovery-card-footer">
              <span>True 12</span>

              <span>False 5</span>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <PublishModal
            onClose={() => setOpen(!open)}
            issueId={issueId}
            userId={userId}
          />
        </Modal>
      )}
    </div>
  );
}

export default graphql(allFindsQuery, {
  options: (props) => ({
    variables: {
      issueId: props.issueId,
    },
    fetchPolicy: "network-only",
  }),
})(Finds);
