import React from 'react';
import { Container } from '@material-ui/core';
import { Message } from 'semantic-ui-react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import '../styles/kousa/CreateTeam.css';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      name: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { name } = this;

    let response = null;
    try {
      response = await this.props.mutate({
        variables: { name },
      });
    } catch (err) {
      this.props.history.push('/');
      return;
    }

    console.log(response);

    const { ok, errors } = response.data.createTeam;

    if (ok) {
      this.props.history.push('/');
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
      name,
      errors: { nameError },
    } = this;

    const errorsList = [];

    if (nameError) {
      errorsList.push(nameError);
    }

    return (
      <Container>
        <div className='create__team__info'>
          <h1>Create a team</h1>
          <p>Choose a name to use for your team</p>
        </div>
        <div className='team__input'>
          <input value={name} onChange={this.onChange} name='name' type='text' placeholder='Team name...' />
        </div>
        <div className='button'>
          <button type='submit' onClick={this.onSubmit}>
            Create
          </button>
        </div>
        {errorsList.length ? <Message header='There was some errors with your submission' error list={errorsList} /> : null}

        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </Container>
    );
  }
}

const createTeamMutation = gql`
  mutation ($name: String!) {
    createTeam(name: $name) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createTeamMutation)(observer(CreateTeam));
