import React from "react";
import { Container } from "@material-ui/core";
import { Message } from "semantic-ui-react";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Title } from "@material-ui/icons";

import "../../styles/viewteamPage/CreateTeam.css";

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      name: "",
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
      console.log(err);
      this.props.history.push("/");
      return;
    }

    const { history } = this.props;
    const { ok, errors, team } = response.data.createTeam;

    if (ok) {
      history.push(`/view-team/${team.id}`);
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
        <div className="create__team__info">
          <h1>Create a team</h1>
          <p>Choose a name to use for your team</p>
        </div>
        <div className="team__input">
          <Title />
          <input
            value={name}
            onChange={this.onChange}
            name="name"
            type="text"
            placeholder="Team name..."
          />
        </div>
        <div className="button" onClick={this.onSubmit}>
          <button type="submit">Create</button>
        </div>
        <div className="did_you_know">
          <div className="paper-content">
            <h1>Did You Know ?</h1>
            <h4>
              Did you know why you have to create a team here, at neox
              everything is based on teams that why you need to create a team
              inorder to communicate with your friends and family
            </h4>
            <h3>- Neox Team</h3>
          </div>
        </div>
        {errorsList.length ? (
          <Message
            header="There was some errors with your submission"
            error
            list={errorsList}
          />
        ) : null}

        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </Container>
    );
  }
}

const createTeamMutation = gql`
  mutation ($name: String!) {
    createTeam(name: $name) {
      ok
      team {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createTeamMutation)(observer(CreateTeam));
