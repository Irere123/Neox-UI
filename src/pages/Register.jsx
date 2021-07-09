import React from 'react';
import { Email, Lock, Facebook, YouTube, Instagram, Telegram } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import '../styles/Register.css';
import logoImg from '../images/logo.svg';

class Register extends React.Component {
  render() {
    return (
      <div className='register-layout'>
        <div className='banner'>
          <div className='logo__register'>
            <img className='logo-img' src={logoImg} alt='' />
            <h1>Neox</h1>
          </div>
          <div className='about__neox__text'>
            <p>
              Neox make communucation excellent it provides seemless experience🚀 not only that it helps to get answer to your questions and
              give answer to those in need for answers....
            </p>
            <h3>#We are Better Than You 😄😄</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card-content'>
            <h2>Create new account</h2>
            <div className='el__input_register'>
              <Telegram />
              <input type='text' placeholder='Username' />
            </div>
            <div className='el__input_register'>
              <Email />
              <input type='email' placeholder='Email' />
            </div>
            <div className='el__input_register'>
              <Lock />
              <input type='password' placeholder='Password' />
            </div>
            <div>
              <button type='submit' className='el__btn_register'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className='footer__banner'>
          <Link to='#instagram'>
            <Instagram />
          </Link>
          <Link to='#facebook'>
            <Facebook />
          </Link>
          <Link to='#youtube'>
            <YouTube />
          </Link>
          <Link to='/'>
            <h4>Sign In</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
