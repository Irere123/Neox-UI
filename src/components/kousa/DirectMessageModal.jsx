import React from 'react';
import { Modal } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Downshift from 'downshift';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import '../../styles/kousa/InvitePeopleModal.css';

const DirectMessageModal = ({ history, open, onClose, teamId, data: { loading, getTeamMembers } }) => (
  <Modal open={open} onClose={onClose}>
    <div className='card__InvitePeople'>
      <div className='cardHeader__InvitePeople'>
        <h1>Direct Messaging</h1>
      </div>
      <div className='input__InvitePeople'>
        <Person />
        {!loading && (
          <Downshift
            onChange={(selectedUser) => {
              history.push(`/view-team/user/${teamId}/${selectedUser.id}`);
              onClose();
            }}
          >
            {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
              <div>
                <input {...getInputProps({ placeholder: 'Search users?' })} className='input__DMModal' />
                {isOpen ? (
                  <div style={{ border: '1px solid #ccc' }}>
                    {getTeamMembers
                      .filter((i) => !inputValue || i.username.toLowerCase().includes(inputValue.toLowerCase()))
                      .map((item, index) => (
                        <div
                          {...getItemProps({ item })}
                          key={item.id}
                          style={{
                            backgroundColor: highlightedIndex === index ? 'gray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          }}
                        >
                          {item.username}
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            )}
          </Downshift>
        )}
      </div>
      <div className='buttons__InvitePeople'>
        <button className='btn__InvitePeople' onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  </Modal>
);

const getTeamMembersQuery = gql`
  query ($teamId: Int!) {
    getTeamMembers(teamId: $teamId) {
      id
      username
    }
  }
`;

export default withRouter(graphql(getTeamMembersQuery)(DirectMessageModal));
