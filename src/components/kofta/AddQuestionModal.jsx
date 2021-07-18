import React from 'react';
import { withFormik } from 'formik';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Avatar } from '@material-ui/core';

import { allQuestionsQuery } from '../../graphql/team';
import '../../styles/kofta/CreateQuestion.css';

const AddQuestionModal = ({ values, handleChange, handleBlur, handleSubmit, isSubmitting, onClose, username }) => {
  return (
    <div>
      <div className='create__newQuestion'>
        <div className='card__newQuestion'>
          <div className='card_newQuestion_content'>
            <div className='avatar_newQuestion'>
              <Avatar>
                {username.charAt(0).toUpperCase()}
                {username.charAt(Math.floor(username.length / 3)).toUpperCase()}
              </Avatar>
            </div>
            <div className='question__details'>
              <div className='date_user_new'>
                <h1>{username}</h1>
                <h3>Today</h3>
              </div>
              <div className='textarea__newQuestion'>
                <textarea
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='text'
                  cols='44'
                  rows='7'
                  placeholder={`What's your question today #${username}?`}
                ></textarea>
              </div>
              <div className='card__newQuestion__btns'>
                <button type='button' disabled={isSubmitting} onClick={onClose} className='btn__addQuestion'>
                  Cancel
                </button>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  onClick={() => {
                    handleSubmit();
                    onClose();
                  }}
                  className='btn__addQuestion'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const createQuestionMutation = gql`
  mutation ($text: String!, $userId: Int!) {
    createQuestion(text: $text, userId: $userId) {
      ok
      question {
        id
        text
        created_at
        user {
          id
        }
      }

      errors {
        path
        message
      }
    }
  }
`;

export default compose(
  graphql(createQuestionMutation),
  withFormik({
    mapPropsToValues: () => ({ text: '' }),
    handleSubmit: async (values, { props: { userId, mutate, history }, setSubmitting, resetForm }) => {
      await mutate({
        variables: { text: values.text, userId },

        update: (
          proxy,
          {
            data: {
              createQuestion: { question },
            },
          },
        ) => {
          // Read query from our cache  for this query
          const data = proxy.readQuery({ query: allQuestionsQuery });
          // write our data back to the cache with new question
          proxy.writeQuery({
            query: allQuestionsQuery,
            data: {
              allQuestions: [...data.allQuestions, question],
            },
          });
        },
        refetchQueries: [{ query: allQuestionsQuery }],
      });

      resetForm();
    },
  }),
)(AddQuestionModal);
