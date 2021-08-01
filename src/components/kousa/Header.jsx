import React, { useState } from "react";
import { Group } from "@material-ui/icons";
import { Modal, Fade, Avatar } from "@material-ui/core";
import Members from "./Members";
import { graphql } from "react-apollo";

import { getTeamMembersQuery } from "../../graphql/team";

function Header({
  channelName,
  team,
  username,
  data: { loading, getTeamMembers },
}) {
  const [open, setOpen] = useState(false);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="titlebar__header">
        <div className="titlebar__header__content">
          <h2 style={{ fontFamily: "Inter", fontSize: "19px" }}>
            # {channelName}
          </h2>

          <div className="members-btn">
            <Avatar variant="rounded" onClick={() => setOpen(!open)}>
              <Group />
              <h4> {getTeamMembers.length}</h4>
            </Avatar>
          </div>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <Fade in={open}>
            <Members
              onClose={() => setOpen(!open)}
              isAdmin={team.admin}
              teamName={team.name}
              members={getTeamMembers}
              username={username}
            />
          </Fade>
        </Modal>
      )}
    </>
  );
}

export default graphql(getTeamMembersQuery, {
  options: ({ team }) => ({
    variables: {
      teamId: team.id,
    },
    fetchPolicy: "network-only",
  }),
})(Header);
