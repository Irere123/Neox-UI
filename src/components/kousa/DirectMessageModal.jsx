import React from "react";
import { Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { withFormik } from "formik";
import { graphql, compose } from "react-apollo";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import findIndex from "lodash/findIndex";

import "../../styles/kousa/InvitePeopleModal.css";
import { getTeamMembersQuery } from "../../graphql/team";
import { meQuery } from "../../graphql/team";

class DirectMessageModal extends React.Component {
  state = {
    selectedOption: [],
  };

  handleSelectChange = (selectedOption) => {
    const { setFieldValue } = this.props;

    this.setState({ selectedOption }, () => console.log("selected"));
    const value = selectedOption.map((v) => v.value);
    setFieldValue("members", value);
  };

  render() {
    const {
      open,
      onClose,
      resetForm,
      handleSubmit,
      isSubmitting,
      currentUserId,
      data: { getTeamMembers = [] },
    } = this.props;

    console.log(getTeamMembers);

    return (
      <Modal
        open={open}
        onClose={(e) => {
          resetForm();
          onClose(e);
        }}
      >
        <div className="card__DM">
          <div className="cardHeader__DM">
            <div className="close-icon" onClick={onClose}>
              <Close />
            </div>
            <h1>Start a chat</h1>
          </div>

          <Select
            onChange={this.handleSelectChange}
            isMulti={true}
            options={getTeamMembers
              .filter((m) => m.id !== currentUserId)
              .map((m) => ({ label: m.username, value: m.id }))}
            isSearchable={true}
            placeholder="Select members to messsage"
          />
          <div className="btn__startMessaging">
            <button onClick={handleSubmit} disabled={isSubmitting}>
              Start Messaging
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
const getOrCreateChannelMutation = gql`
  mutation ($teamId: Int!, $members: [Int!]!) {
    getOrCreateChannel(teamId: $teamId, members: $members) {
      id
      name
    }
  }
`;

export default compose(
  withRouter,
  graphql(getOrCreateChannelMutation),
  graphql(getTeamMembersQuery),
  withFormik({
    mapPropsToValues: () => ({ members: [] }),
    handleSubmit: async (
      { members },
      { props: { history, onClose, teamId, mutate }, resetForm, setSubmitting }
    ) => {
      await mutate({
        variables: { members, teamId },
        update: (store, { data: { getOrCreateChannel } }) => {
          const { id, name } = getOrCreateChannel;

          const data = store.readQuery({ query: meQuery });
          const teamIdx = findIndex(data.me.teams, ["id", teamId]);
          const notInChannelList = data.me.teams[teamIdx].channels.every(
            (c) => c.id !== id
          );

          if (notInChannelList) {
            data.me.teams[teamIdx].channels.push({
              __typename: "Channel",
              id,
              name,
              dm: true,
            });
            store.writeQuery({ query: meQuery, data });
          }
          history.push(`/view-team/${teamId}/${id}`);
        },
      });
      onClose();
      resetForm();
    },
  })
)(DirectMessageModal);
