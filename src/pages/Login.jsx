import React from "react";
import { Email, Lock } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import dayjs from "dayjs";

import { wsLink } from "../apollo";
import "../styles/Login.css";
import logoImg from "../images/logo.svg";

const now = dayjs();
// eslint-disable jsx-a11y/accessible-emoji
class Login extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: "",
      password: "",
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;

    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, token, refreshToken, errors } = response.data.login;

    if (ok) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      wsLink.subscriptionClient.tryReconnect();
      this.props.history.push("/view-team");
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const {
      email,
      password,
      errors: { emailError, passwordError },
    } = this;

    const errorsList = [];

    if (passwordError) {
      errorsList.push(passwordError);
    }

    if (emailError) {
      errorsList.push(emailError);
    }

    return (
      <div className="login-layout">
        <div className="banner">
          <div className="logo__login">
            <img className="logo-img" src={logoImg} alt="" />
            <h1>Neox</h1>
          </div>
          <div className="about__neox__text">
            <p>
              Neox, Fast Dark Secure Free Better Ask Chat Collaborate all in one
              amazing place together with Neox, your rocket to the galaxies....
            </p>
            <h3>#Collaborative Communication</h3>
          </div>
        </div>
        <div className="card-login">
          <div className="card-content">
            <h2>Sign in to your account</h2>

            <div className="el__input_login">
              <Email />
              <input
                onError
                value={email}
                onChange={this.onChange}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="el__input_login">
              <Lock />
              <input
                value={password}
                onChange={this.onChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="el__btn_login"
              >
                Sign In
              </button>
            </div>
            {errorsList.length ? <Message error list={errorsList} /> : null}
          </div>
        </div>
        <div className="footer__banner__login">
          <p>&nabla; Irere Emmy</p>
          <p>&copy; Copyright {dayjs(now).format("YYYY")}</p>
          <Link to="/register">
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
