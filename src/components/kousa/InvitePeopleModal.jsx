import React from "react";
import { Modal } from "@material-ui/core";
import { withFormik } from "formik";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { Email } from "@material-ui/icons";

import "../../styles/kousa/InvitePeopleModal.css";
import normalizeErrors from "../../normalizeErrors";

const InvitePeopleModal = ({
  open,
  onClose,
  values,
  handleChange,
  setErrors,
  resetForm,
  handleBlur,
  handleSubmit,
  isSubmitting,
  teamId,
  touched,
  errors,
}) => (
  <Modal open={open} onClose={onClose}>
    <div className="card__InvitePeople">
      <div className="cardHeader__InvitePeople">
        <h1>Add People to your team</h1>
      </div>
      <div className="input__InvitePeople">
        <Email />
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="text"
          placeholder="name@gmail.com"
        />
      </div>
      {touched.email && errors.email ? errors.email[0] : null}
      <div className="buttons__InvitePeople">
        <button
          className="btn__InvitePeople"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Invite
        </button>
        <button
          className="btn__InvitePeople"
          disabled={isSubmitting}
          onClick={(e) => {
            resetForm();
            onClose(e);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>
);

const addTeamMemberMutation = gql`
  mutation ($email: String!, $teamId: Int!) {
    addTeamMember(email: $email, teamId: $teamId) {
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
    mapPropsToValues: () => ({ email: "" }),
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
        variables: { teamId, email: values.email },
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
            path: "email",
            message: "This user is already part of the team",
          });
        }
        setErrors(normalizeErrors(filteredErrors));
      }
    },
  })
)(InvitePeopleModal);
