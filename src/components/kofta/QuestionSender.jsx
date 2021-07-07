import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kofta/QuestionSender.css';

function QuestionSender() {
  return (
    <React.Fragment>
      <div className='asker__top'>
        <Avatar className='asker__avatar'>TL</Avatar>
        <form>
          <input className='asker__input' placeholder={"what's on your mind?"} />
          <button type='submit'>Hidden Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default QuestionSender;
