import React from 'react';
import { Container } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';

import '../styles/Register.css';

class Register extends React.Component {
  render() {
    return (
      <Container>
        <div id='sign-up'>
          <h1>Sign Up</h1>
        </div>
        <div className='card'>
          <div className='button'>
            <Facebook className='icon' />
            <button type='submit'>Sign Up with Facebook</button>
          </div>
          <h1>Or</h1>
          <div className='input'>
            <input placeholder='Username' />
          </div>
          <div className='input__email'>
            <input placeholder='Email' />
          </div>
          <div className='input__password'>
            <input placeholder='Password' />
          </div>
          <div className='button2'>
            <button type='submit'>Sign Up</button>
          </div>
        </div>
        <div className='b1'></div>
        <div className='b2'></div>
        <div className='b3'></div>
      </Container>
    );
  }
}

export default Register;
