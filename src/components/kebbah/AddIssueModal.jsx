import React, { useState } from 'react';
import Select from 'react-select';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo';
import { Close, School, MusicNote, Movie, Work, Assignment, Face, Favorite, Subject, Terrain } from '@material-ui/icons';
import { Chip } from '@material-ui/core';

function AddIssueModal({ onClose, teamsName }) {
  const [category, setCategory] = useState('');
  const [selectedOption, setOption] = useState(0);

  console.log(category);
  console.log(selectedOption);

  return (
    <div className='addIssueModal'>
      <div className='addIssueModal_content'>
        <div className='addIssueModal__header'>
          <div className='close-icon' onClick={onClose}>
            <Close />
          </div>
          <h1>Add new Issue</h1>
        </div>
        <div className='addIssueModal__center'>
          <div className='description__input'>
            <label>Description</label>
            <input type='text' placeholder='Write your long issue description' />
          </div>
          <div className='category__input'>
            <label>Category</label>
            <div className='chips'>
              <Chip
                icon={<MusicNote />}
                onClick={() => {
                  setCategory('Music');
                }}
                label='Music'
                color='secondary'
              />
              <Chip
                icon={<School />}
                onClick={() => {
                  setCategory('School');
                }}
                label='School'
                color='secondary'
              />
              <Chip
                icon={<Movie />}
                onClick={() => {
                  setCategory('Cinema');
                }}
                label='Cinema'
                color='secondary'
              />
              <Chip
                icon={<Work />}
                onClick={() => {
                  setCategory('Work');
                }}
                label='Work'
                color='secondary'
              />
              <Chip
                icon={<Terrain />}
                onClick={() => {
                  setCategory('Earth');
                }}
                label='Earth'
                color='secondary'
              />
              <Chip
                icon={<Assignment />}
                onClick={() => {
                  setCategory('Assignment');
                }}
                label='Assignment'
                color='secondary'
              />
              <Chip
                icon={<Subject />}
                onClick={() => {
                  setCategory('Lesson');
                }}
                label='Lesson'
                color='secondary'
              />
              <Chip
                icon={<Face />}
                onClick={() => {
                  setCategory('Family');
                }}
                label='Family'
                color='secondary'
              />
              <Chip
                icon={<Favorite />}
                onClick={() => {
                  setCategory('Love');
                }}
                label='Love'
                color='secondary'
              />
            </div>
          </div>
          <div className='team__input_issue'>
            <label>Team</label>
            <Select
              options={teamsName.map((t) => ({ label: t.name, value: t.id }))}
              placeholder='Select one of your teams'
              isMulti={false}
              isSearchable={true}
            />
          </div>
          <div className='addIssueModal__btn'>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddIssueModal;
