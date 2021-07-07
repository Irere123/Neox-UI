import React from 'react';
import { Container } from '@material-ui/core';

import '../styles/kousa/CreateTeam.css';

class CreateTeam extends React.Component {
  render() {
    return (
      <Container>
        <div className='create__team__info'>
          <h1>Create a team</h1>
          <p>Choose a name to use for your team</p>
        </div>
        <div className='team__input'>
          <input placeholder='Team name...' />
        </div>
        <div className='button'>
          <button type='submit'>Create</button>
        </div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </Container>
    );
  }
}

export default CreateTeam;
