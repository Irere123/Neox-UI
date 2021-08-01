import React from "react";
import { Close } from "@material-ui/icons";
import { withFormik } from "formik";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import { allDiscussionsQuery } from "../../../graphql/issue";
import "../../../styles/kallen/Modals.css";

function AddDiscussionModal({
  onClose,
  resetForm,
  values,
  handleSubmit,
  isSubmitting,
  handleBlur,
  handleChange,
}) {
  return (
    <div className="discussionModal">
      <div className="discussionModal_content">
        <div className="discussionModal__header">
          <div
            className="close-icon"
            onClick={(e) => {
              resetForm();
              onClose(e);
            }}
          >
            <Close />
          </div>
          <h1>Create a new discussion</h1>
        </div>
        <div className="discussionModal__center">
          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            value={values.name}
          />
          <label>Discussion</label>
          <textarea
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            name="discussion"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="discussionModal__btn">
          <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

const createDiscussionMutation = gql`
  mutation (
    $name: String!
    $discussion: String!
    $userId: Int!
    $issueId: ID!
  ) {
    createDiscussion(
      name: $name
      discussion: $discussion
      userId: $userId
      issueId: $issueId
    ) {
      ok
      discussion {
        id
        name
        discussion
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
  graphql(createDiscussionMutation),
  withFormik({
    mapPropsToValues: () => ({ discussion: "", name: "" }),
    handleSubmit: async (
      values,
      { props: { mutate, onClose, userId, issueId }, setSubmitting, resetForm }
    ) => {
      await mutate({
        variables: {
          userId,
          issueId,
          name: values.name,
          discussion: values.discussion,
        },
        update: (store, { data: { createDiscussion } }) => {
          const { discussion } = createDiscussion;

          const data = store.readQuery({
            query: allDiscussionsQuery,
            variables: { issueId },
          });
          store.writeQuery({
            query: allDiscussionsQuery,
            variables: { issueId },
            data: {
              ...data,
              allDiscussions: [discussion, ...data.allDiscussions],
            },
          });
        },
      });
      setSubmitting(false);
      resetForm();
      onClose();
    },
  })
)(AddDiscussionModal);
