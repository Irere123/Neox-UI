import React from 'react';
import { Email, Lock, Facebook, YouTube, Instagram } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import '../styles/Login.css';
import logoImg from '../images/logo.svg';

class Login extends React.Component {
  render() {
    return (
      <div className='login-layout'>
        <div className='banner'>
          <div className='logo__login'>
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
            <h2>Sign in to your account</h2>
            <div className='el__input_login'>
              <Email />
              <input placeholder='Email' />
            </div>
            <div className='el__input_login'>
              <Lock />
              <input placeholder='Password' />
            </div>
            <div>
              <button type='submit' className='el__btn_login'>
                Sign In
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
          <Link to='/register'>
            <h4>Create Account</h4>
          </Link>
          <p>
            <code>Copyright 2021</code>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
