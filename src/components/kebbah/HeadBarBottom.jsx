import React, { useState } from 'react';
import { Add } from '@material-ui/icons';
import { Modal } from '@material-ui/core';

import AddIssueModal from './AddIssueModal';

function HeadBarBottom() {
  const [open, setOpen] = useState(false);

  return (
    <div className='homepage_team__wrapper'>
      <h2>Your Teams</h2>
      <div className='header-items'>
        <div className='homepage_team_list'>
          <div className='home_team_list_item'>M</div>
          <div className='home_team_list_item'>F</div>
          <div className='home_team_list_item'>N</div>
          <div className='home_team_list_item'>+</div>
        </div>
        <div onClick={() => setOpen(!open)}>
          <button className='btn__newIssue'>New +</button>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <AddIssueModal />
        </Modal>
      )}
    </div>
  );
}

export default HeadBarBottom;
