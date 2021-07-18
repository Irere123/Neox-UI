import React, { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { Modal } from '@material-ui/core';

import Feed from './Feed';
import AddQuestionModal from './AddQuestionModal';

const QFeed = ({ questions, username, userId }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='center'>
      <div className='top__center'>
        <div className='search'>
          <div className='search__input'>
            <SearchOutlined />
            <input placeholder='Search Questions and Answers' />
          </div>
        </div>
        <div className='ask_btn'>
          <button onClick={() => setOpen(!open)} className='btn__askQuestion'>
            Your Question
          </button>
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
        >
          <AddQuestionModal
            onClose={() => {
              setOpen(!open);
            }}
            username={username}
            userId={userId}
          />
        </Modal>
      )}
      <div className='main'>
        <Feed questions={questions} />
      </div>
    </div>
  );
};

export default QFeed;
