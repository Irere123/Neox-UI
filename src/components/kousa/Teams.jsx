import React from 'react';
import '../../styles/kousa/Teams.css';
import { Link } from 'react-router-dom';

const team = ({ id, letter }) => (
  <div key={`team-${id}`} className='team__list__item'>
    {letter}
  </div>
);

function Teams({ teams }) {
  return (
    <div className='team__wrapper'>
      <div className='team__list'>
        {teams.map(team)}
        <Link key='add-team' to='/create-team'>
          <div className='team__list__item'>+</div>
        </Link>
      </div>
    </div>
  );
}

export default Teams;
