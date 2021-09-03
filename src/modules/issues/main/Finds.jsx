import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { graphql } from "react-apollo";
import { EmojiObjects } from "@material-ui/icons";

import "../../../styles/issuePage/Finds.css";
import Loader from "../../../components/Loader";
import PublishModal from "./modals/PublishModal";
import { allFindsQuery } from "../../../graphql/issue";
import FindCard from "./cards/FindCard";
import NothingToFetchMessage from "./NothingToFetchMessage";

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
        <div className="no__finds__toFetch">
          <NothingToFetchMessage
            message="There are no finds on this issue yet"
            title="No finds"
            icon={<EmojiObjects />}
            iconName="Finds"
          />
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
