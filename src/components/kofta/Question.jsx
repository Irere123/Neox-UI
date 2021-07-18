import React from 'react';

import img from '../../images/mic.svg';

const Question = () => {
  return (
    <div className='page__question_answer'>
      <div>
        <button>Back</button>
      </div>
      <div className='question_on_answer_page'>
        <img src={img} alt='Microphone' />
        <div className='question_on_answer_content'>
          <h1>Bob Asked this</h1>
          <h3>It was on July 20 2021</h3>
          <div className='question_text'>
            <p>When i was learning physics in my class they asked as how to calculate for when there is M1 and M2 anyone knows ???</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
