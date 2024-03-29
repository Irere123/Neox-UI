import React, { useState } from "react";
import { Group, Ballot } from "@material-ui/icons";
import { Modal, Fade, Avatar, Tooltip, Drawer } from "@material-ui/core";
import Members from "../modals/Members";
import { graphql } from "react-apollo";

import { getTeamMembersQuery } from "../../../graphql/team";
import DrawerContent from "./DrawerContent";

function Header({
  teams,
  channelName,
  team,
  currentUserId,
  username,
  data: { loading, getTeamMembers },
}) {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="titlebar__header">
        <div className="titlebar__header__content">
          <div
            className="button-toggle-sidebar"
            onClick={() => setOpenDrawer(!open)}
          >
            <Tooltip arrow disableFocusListener title="Open Sidebar">
              <Ballot />
            </Tooltip>
          </div>
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
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
        <DrawerContent
          teams={teams}
          team={team}
          username={username}
          currentUserId={currentUserId}
          onItemClick={() => setOpenDrawer(!openDrawer)}
        />
      </Drawer>
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
