import React from "react";
import { Email, Lock, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import dayjs from "dayjs";

import "../styles/Register.css";
import logoImg from "../images/logo.svg";

const now = dayjs();

// eslint-disable jsx-a11y/accessible-emoji
class Register extends React.Component {
  state = {
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  };

  onSubmit = async () => {
    this.setState({
      usernameError: "",
      emailError: "",
      passwordError: "",
    });

    const { username, password, email } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push("/");
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
    } = this.state;

    const errorList = [];

    if (usernameError) {
      errorList.push(usernameError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

    if (emailError) {
      errorList.push(emailError);
    }

    return (
      <div className="register-layout">
        <div className="banner">
          <div className="logo__register">
            <img className="logo-img" src={logoImg} alt="" />
            <h1>NEOX</h1>
          </div>
          <div className="about__neox__text">
            <p>
              Neox, Fast Dark Secure Free Better Ask Chat Collaborate all in one
              amazing place together with Neox, your rocket to the galaxies....
            </p>
            <h3>#Collaborative Communication🚀🚀</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Create new account</h2>
            <div className="el__input_register">
              <Person />
              <input
                name="username"
                onChange={this.onChange}
                value={username}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="el__input_register">
              <Email />
              <input
                name="email"
                onChange={this.onChange}
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="el__input_register">
              <Lock />
              <input
                name="password"
                onChange={this.onChange}
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="el__btn_register"
              >
                Sign Up
              </button>
            </div>
          </div>
          {errorList.length ? (
            <div className="ErrorCard__Toast show">
              {errorList.map((error) => (
                <p>
                  <span>●</span>
                  {error}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="footer__banner">
          <p>&nabla; Irere Emmy</p>
          <p className="copyright">
            &copy; Copyright {dayjs(now).format("YYYY")}
          </p>
          <Link to="/">
            <h4>Sign In</h4>
          </Link>
        </div>
      </div>
    );
  }
}

const registerMutation = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);
