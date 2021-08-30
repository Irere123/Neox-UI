import React from "react";
import { Modal } from "@material-ui/core";
import { withFormik } from "formik";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { Close, Warning } from "@material-ui/icons";

import "../../../styles/kousa/InvitePeopleModal.css";
import normalizeErrors from "../../../normalizeErrors";

const InvitePeopleModal = ({
  open,
  onClose,
  values,
  handleChange,
  resetForm,
  handleBlur,
  handleSubmit,
  isSubmitting,
  touched,
  errors,
}) => (
  <Modal open={open} onClose={onClose}>
    <div className="card__InvitePeople">
      <div className="cardHeader__InvitePeople">
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
        <div className="headerTitle_Invite">
          <h1>Send Invitation</h1>
        </div>
      </div>
      <div className="input__InvitePeople">
        <input
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          type="text"
          placeholder="What is name of your friend ?"
        />
      </div>
      {touched.username ? (
        <div className="ErrorMessage">
          <span>{errors.username ? <Warning /> : null}</span>
          <p className="error">{errors.username ? errors.username[0] : null}</p>
        </div>
      ) : null}

      <div className="buttons__InvitePeople">
        <button
          className="btn__InvitePeople"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Invite
        </button>
      </div>
    </div>
  </Modal>
);

const addTeamMemberMutation = gql`
  mutation ($username: String!, $teamId: Int!) {
    addTeamMember(username: $username, teamId: $teamId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default compose(
  graphql(addTeamMemberMutation),
  withFormik({
    mapPropsToValues: () => ({ username: "" }),
    handleSubmit: async (
      values,
      {
        props: { onClose, teamId, mutate },
        setSubmitting,
        setErrors,
        resetForm,
      }
    ) => {
      const response = await mutate({
        variables: { teamId, username: values.username },
      });
      const { ok, errors } = response.data.addTeamMember;
      if (ok) {
        resetForm();
        onClose();
        setSubmitting(false);
      } else {
        setSubmitting(false);
        const errorsLength = errors.length;
        const filteredErrors = errors.filter(
          (e) => e.message !== "user_id must be unique"
        );

        if (!errorsLength !== filteredErrors.length) {
          filteredErrors.push({
            path: "username",
            message: "This user is already part of the team",
          });
        }
        setErrors(normalizeErrors(filteredErrors));
      }
    },
  })
)(InvitePeopleModal);
