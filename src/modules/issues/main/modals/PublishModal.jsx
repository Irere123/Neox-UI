import React from "react";
import { Close } from "@material-ui/icons";
import { withFormik } from "formik";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import { allFindsQuery } from "../../../../graphql/issue";
import "../../../../styles/issuePage/Modals.css";

function PublishModal({
  onClose,
  resetForm,
  values,
  handleSubmit,
  isSubmitting,
  handleBlur,
  handleChange,
}) {
  return (
    <div className="publishModal">
      <div className="publishModal_content">
        <div className="publishModal__header">
          <div
            className="close-icon"
            onClick={(e) => {
              resetForm();
              onClose(e);
            }}
          >
            <Close />
          </div>
          <h1>Publish your find</h1>
        </div>
        <div className="publishModal__center">
          <label>Your Find</label>
          <textarea
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            name="description"
            cols="30"
            rows="6"
          ></textarea>
        </div>
        <div className="publishModal__btn">
          <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

const createFindMutation = gql`
  mutation ($description: String!, $userId: Int!, $issueId: ID!) {
    createFind(description: $description, userId: $userId, issueId: $issueId) {
      ok
      find {
        id
        description
        user {
          username
        }
        created_at
      }
      errors {
        path
        message
      }
    }
  }
`;

export default compose(
  graphql(createFindMutation),
  withFormik({
    mapPropsToValues: () => ({ description: "" }),
    handleSubmit: async (
      values,
      { props: { mutate, onClose, userId, issueId }, setSubmitting, resetForm }
    ) => {
      await mutate({
        variables: {
          userId,
          issueId,
          description: values.description,
        },
        update: (store, { data: { createFind } }) => {
          const { find } = createFind;

          const data = store.readQuery({
            query: allFindsQuery,
            variables: { issueId },
          });
          store.writeQuery({
            query: allFindsQuery,
            variables: { issueId },
            data: {
              ...data,
              allFinds: [find, ...data.allFinds],
            },
          });
        },
      });
      setSubmitting(false);
      resetForm();
      onClose();
    },
  })
)(PublishModal);
