import React from "react";
import { Modal } from "@material-ui/core";
import { withFormik } from "formik";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import findIndex from "lodash/findIndex";
import Select from "react-select";
import { Close } from "@material-ui/icons";

import "../../../styles/kousa/AddChannelModal.css";
import { meQuery } from "../../../graphql/team";
import { getTeamMembersQuery } from "../../../graphql/team";

class AddChannelModal extends React.Component {
  state = {
    checked: true,
    selectedOption: [],
  };

  handleSelectChange = (selectedOption) => {
    const { setFieldValue } = this.props;

    this.setState({ selectedOption });
    const value = selectedOption.map((v) => v.value);
    setFieldValue("members", value);
  };

  render() {
    const {
      data: { getTeamMembers },
      open,
      onClose,
      resetForm,
      setFieldValue,
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      currentUserId,
    } = this.props;

    return (
      <Modal
        open={open}
        onClose={(e) => {
          this.setState({ checked: true });
          resetForm();
          onClose(e);
        }}
      >
        <div className="card__addChannel">
          <div className="cardHeader__addChannel">
            <div className="headerTitle_Invite">
              <span>
                <h1>Create channel</h1>
              </span>
            </div>
            <div
              className="close-icon"
              onClick={(e) => {
                resetForm();
                onClose(e);
              }}
            >
              <div>
                <Close />
              </div>
            </div>
          </div>
          <div className="input__addChannel">
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              type="text"
              placeholder="Channel name"
            />
          </div>
          <div className="checkbox-AddChannel">
            <input
              type="checkbox"
              value={!values.public}
              onChange={() => {
                this.setState((state) => ({
                  checked: !state.checked,
                }));
                setFieldValue("public", !this.state.checked);
              }}
            />
            <label>Private</label>
          </div>
          <br />
          {!this.state.checked && (
            <Select
              onChange={this.handleSelectChange}
              options={getTeamMembers
                .filter((tm) => tm.id !== currentUserId)
                .map((tm) => ({ label: tm.username, value: tm.id }))}
              isMulti={true}
              isSearchable={true}
              placeholder="Select members in your team"
            />
          )}

          <div className="buttons__AddChannel">
            <button
              className="btn__addChannel"
              onClick={() => {
                handleSubmit();
                this.setState({ checked: true });
              }}
              disabled={isSubmitting}
            >
              Create Channel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const createChannelMutation = gql`
  mutation ($name: String!, $teamId: Int!, $public: Boolean, $members: [Int!]) {
    createChannel(
      teamId: $teamId
      name: $name
      public: $public
      members: $members
    ) {
      ok
      channel {
        id
        name
        dm
      }
      errors {
        path
        message
      }
    }
  }
`;

export default compose(
  graphql(createChannelMutation),
  graphql(getTeamMembersQuery),
  withFormik({
    mapPropsToValues: () => ({ public: true, name: "", members: [] }),
    handleSubmit: async (
      values,
      { props: { teamId, mutate, onClose }, setSubmitting, resetForm }
    ) => {
      if (!values.name || !values.name.trim()) {
        setSubmitting(false);
        return;
      }

      await mutate({
        variables: {
          teamId,
          name: values.name,
          public: values.public,
          members: values.members,
        },
        optimisticResponse: {
          createChannel: {
            __typename: "Mutation",
            ok: true,
            channel: {
              __typename: "Channel",
              id: -1,
              name: values.name,
              dm: false,
            },
          },
        },
        update: (store, { data: { createChannel } }) => {
          const { ok, channel } = createChannel;
          if (!ok) {
            return;
          }

          const data = store.readQuery({ query: meQuery });
          const teamIdx = findIndex(data.me.teams, ["id", teamId]);
          data.me.teams[teamIdx].channels.push(channel);
          store.writeQuery({ query: meQuery, data });
        },
      });
      setSubmitting(false);
      resetForm();
      onClose();
    },
  })
)(AddChannelModal);
