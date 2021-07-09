import React from 'react';
import { Email, Lock, Facebook, YouTube, Instagram } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import '../styles/Login.css';
import logoImg from '../images/logo.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: '',
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, token, refreshToken } = response.data.login;
    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const { email, password } = this;

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
              <input value={email} onChange={this.onChange} name='email' type='email' placeholder='Email' />
            </div>
            <div className='el__input_login'>
              <Lock />
              <input value={password} onChange={this.onChange} name='password' type='password' placeholder='Password' />
            </div>
            <div>
              <button type='submit' onClick={this.onSubmit} className='el__btn_login'>
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
        </div>
      </div>
    );
  }
}

const loginMutation = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(loginMutation)(observer(Login));
