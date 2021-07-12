import React from 'react';
import { Modal } from '@material-ui/core';
import { withFormik } from 'formik';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Title } from '@material-ui/icons';
import findIndex from 'lodash/findIndex';

import '../../styles/kousa/AddChannelModal.css';
import { meQuery } from '../../graphql/team';

const AddChannelModal = ({
  open,
  onClose,
  resetForm,
  setFieldValue,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  teamId,
}) => (
  <Modal
    open={open}
    onClose={(e) => {
      resetForm();
      onClose(e);
    }}
  >
    <div className='card__addChannel'>
      <div className='cardHeader__addChannel'>
        <h1>Add Channel</h1>
      </div>
      <div className='input__addChannel'>
        <Title />
        <input value={values.name} onChange={handleChange} onBlur={handleBlur} name='name' type='text' placeholder='Channel Name' />
      </div>
      <div className='checkbox-AddChannel'>
        <input className='checkbox' type='checkbox' id='checkbox' />
        <label for='checkbox' className='label'>
          <div className='ball'></div>
        </label>
        <label>Private</label>
      </div>
      <div className='buttons__AddChannel'>
        <button className='btn__addChannel' onClick={handleSubmit} disabled={isSubmitting}>
          Create Channel
        </button>
        <button
          className='btn__addChannel'
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

const createChannelMutation = gql`
  mutation ($name: String!, $teamId: Int!) {
    createChannel(teamId: $teamId, name: $name) {
      ok
      channel {
        id
        name
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
  withFormik({
    mapPropsToValues: () => ({ name: '' }),
    handleSubmit: async (values, { props: { teamId, mutate, onClose }, setSubmitting, resetForm }) => {
      await mutate({
        variables: { teamId, name: values.name },
        optimisticResponse: {
          createChannel: {
            __typename: 'Mutation',
            ok: true,
            channel: {
              __typename: 'Channel',
              id: -1,
              name: values.name,
            },
          },
        },
        update: (store, { data: { createChannel } }) => {
          const { ok, channel } = createChannel;
          if (!ok) {
            return;
          }

          const data = store.readQuery({ query: meQuery });
          const teamIdx = findIndex(data.me.teams, ['id', teamId]);
          data.me.teams[teamIdx].channels.push(channel);
          store.writeQuery({ query: meQuery, data });
        },
      });
      setSubmitting(false);
      resetForm();
      onClose();
    },
  }),
)(AddChannelModal);
