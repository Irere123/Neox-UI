import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { withFormik } from "formik";
import { allRepliesQuery } from "../../../graphql/issue";

const ENTER_KEY = 13;

function InputReply({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) {
  return (
    <div className="reply__input">
      <input
        name="reply"
        placeholder="Your Reply"
        onKeyDown={(e) => {
          if (e.keyCode === ENTER_KEY && !isSubmitting) {
            handleSubmit(e);
          }
        }}
        value={values.reply}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
}

const createReplyMutation = gql`
  mutation ($discussionId: ID!, $userId: Int!, $reply: String!) {
    createReply(discussionId: $discussionId, userId: $userId, reply: $reply) {
      ok
      reply {
        id
        reply
        user {
          username
        }
        created_at
      }
    }
  }
`;

export default compose(
  graphql(createReplyMutation),
  withFormik({
    mapPropsToValues: () => ({ reply: "" }),
    handleSubmit: async (
      { reply },
      { props: { mutate, discussionId, userId }, setSubmitting, resetForm }
    ) => {
      if (!reply || !reply.trim()) {
        setSubmitting(false);
        return;
      }
      await mutate({
        variables: { discussionId, userId, reply },
        update: (store, { data: { createReply } }) => {
          const { reply } = createReply;

          const data = store.readQuery({
            query: allRepliesQuery,
            variables: { discussionId },
          });
          store.writeQuery({
            query: allRepliesQuery,
            variables: { discussionId },
            data: {
              ...data,
              allReplies: [...data.allReplies, reply],
            },
          });
        },
      });
      resetForm(false);
    },
  })
)(InputReply);
