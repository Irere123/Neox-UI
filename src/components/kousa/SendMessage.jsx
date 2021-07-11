import React from 'react';
import { withFormik } from 'formik';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import {
  MessageOutlined as MessageIcon,
  AttachmentOutlined as AttachmentIcon,
  SentimentSatisfiedOutlined as EmojiIcon,
} from '@material-ui/icons';

import '../../styles/kousa/SendMessage.css';

const ENTER_KEY = 13;

const SendMessage = ({ channelName, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  return (
    <div className='send_message_wrapper'>
      <div className='message__input'>
        <MessageIcon className='message__inputIcon' />
        <input
          onKeyDown={(e) => {
            if (e.keyCode === ENTER_KEY && !isSubmitting) {
              handleSubmit(e);
            }
          }}
          name='message'
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={`Message #${channelName}`}
        />
        <AttachmentIcon />
        <EmojiIcon />
      </div>
    </div>
  );
};

const createMessageMutation = gql`
  mutation ($channelId: Int!, $text: String!) {
    createMessage(channelId: $channelId, text: $text)
  }
`;

export default compose(
  graphql(createMessageMutation),
  withFormik({
    mapPropsToValues: () => ({ message: '' }),
    handleSubmit: async (values, { props: { channelId, mutate }, setSubmitting, resetForm }) => {
      if (!values.message || !values.message.trim()) {
        setSubmitting(false);
        return;
      }
      await mutate({
        variables: { channelId, text: values.message },
      });
      resetForm();
    },
  }),
)(SendMessage);
