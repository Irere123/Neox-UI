import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { graphql } from "react-apollo";

import "../../styles/kallen/Finds.css";
import Loader from "../Loader";
import PublishModal from "./PublishModal";
import { allFindsQuery } from "../../graphql/issue";
import FindCard from "./FindCard";

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
          <FindCard key={f.id} find={f} userId={userId} />
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
