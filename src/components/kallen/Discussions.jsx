import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import "../../styles/kallen/Discussions.css";
import AddDiscussionModal from "./modals/AddDiscussionModal";
import DiscussionCard from "./cards/DiscussionCard";
import Loader from "../Loader";
import { allDiscussionsQuery } from "../../graphql/issue";
import NothingToFetchMessage from "./NothingToFetchMessage";

function Discussions({ data: { loading, allDiscussions }, issueId, userId }) {
  const [open, setOpen] = useState(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="discussions-layout">
      <div className="discussions-header">
        <h2>Discussions</h2>
        <button type="button" onClick={() => setOpen(!open)}>
          New discussion
        </button>
      </div>
      {allDiscussions.map((discussion) => (
        <DiscussionCard discussion={discussion} userId={userId} />
      ))}
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <AddDiscussionModal
            issueId={issueId}
            userId={userId}
            onClose={() => setOpen(!open)}
          />
        </Modal>
      )}
    </div>
  );
}

export default graphql(allDiscussionsQuery, {
  options: (props) => ({
    variables: {
      issueId: props.issueId,
    },
    fetchPolicy: "network-only",
  }),
})(Discussions);
