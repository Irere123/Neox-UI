import React from 'react';
import { Avatar } from '@material-ui/core';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

import { meQuery } from '../../graphql/team';
import '../../styles/kofta/QuestionSender.css';

class QuestionSender extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      text: '',
    });
  }

  onSubmit = async () => {
    const { text } = this;
    let response = null;
    const {
      data: { me },
    } = this.props;

    const { id: userId } = me;

    try {
      response = await this.props.mutate({
        variables: { text, userId },
      });
    } catch (err) {
      console.log(err);
      this.props.history.push('/');
      return;
    }

    console.log(response);

    const { ok, errors, question } = response.data.createQuestion;

    if (!ok) {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      console.log(err);
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const { text } = this;

    return (
      <React.Fragment>
        <div className='asker__top'>
          <Avatar className='asker__avatar'>TL</Avatar>
          <div className='form'>
            <input
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  this.onSubmit(e);
                }
              }}
              name='text'
              onChange={this.onChange}
              value={text}
              className='asker__input'
              placeholder="what's on your mind?"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const createQuestionMutation = gql`
  mutation ($text: String!, $userId: Int!) {
    createQuestion(text: $text, userId: $userId) {
      ok
      question {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;

export default compose(graphql(createQuestionMutation), graphql(meQuery))(observer(QuestionSender));
