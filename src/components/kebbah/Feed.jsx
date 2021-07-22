import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';

function Feed() {
  return (
    <div className='issue-cards-home'>
      <div className='issue-card'>
        <div className='issue-card-header'>
          <Avatar>JD</Avatar>
          <div className='issue-card-info'>
            <h2>John Doe</h2>
            <h4>10 hours ago</h4>
          </div>
        </div>
        <Link to='/issue'>
          <div className='issue-card-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, molestiae delectus? Error sed natus deleniti nesciunt
            ratione officiis quod. Ipsum.
          </div>
        </Link>
        <div className='issue-card-bottom'>
          <div className='category-issue'>
            <span className='hashtag'>#</span>
            <h4>World</h4>
          </div>
          <div className='home_team_list_item'>M</div>
        </div>
      </div>
      <div className='issue-card'>
        <div className='issue-card-header'>
          <Avatar>JS</Avatar>
          <div className='issue-card-info'>
            <h2>John Smith</h2>
            <h4>10 hours ago</h4>
          </div>
        </div>
        <Link to='/issue'>
          <div className='issue-card-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, molestiae delectus? Error sed natus deleniti nesciunt
            ratione officiis quod. Ipsum.
          </div>
        </Link>
        <div className='issue-card-bottom'>
          <div className='category-issue'>
            <span className='hashtag'>#</span>
            <h4>Music</h4>
          </div>
          <div className='home_team_list_item'>F</div>
        </div>
      </div>
      <div className='issue-card'>
        <div className='issue-card-header'>
          <Avatar>MJ</Avatar>
          <div className='issue-card-info'>
            <h2>Michael Jordan</h2>
            <h4>10 hours ago</h4>
          </div>
        </div>
        <Link to='/issue'>
          <div className='issue-card-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, molestiae delectus? Error sed natus deleniti nesciunt
            ratione officiis quod. Ipsum.
          </div>
        </Link>
        <div className='issue-card-bottom'>
          <div className='category-issue'>
            <span className='hashtag'>#</span>
            <h4>Cinema</h4>
          </div>
          <div className='home_team_list_item'>N</div>
        </div>
      </div>
      <div className='issue-card'>
        <div className='issue-card-header'>
          <Avatar>LJ</Avatar>
          <div className='issue-card-info'>
            <h2>Lebron James</h2>
            <h4>10 hours ago</h4>
          </div>
        </div>
        <Link to='/issue'>
          <div className='issue-card-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, molestiae delectus? Error sed natus deleniti nesciunt
            ratione officiis quod. Ipsum.
          </div>
        </Link>
        <div className='issue-card-bottom'>
          <div className='category-issue'>
            <span className='hashtag'>#</span>
            <h4>Career</h4>
          </div>
          <div className='home_team_list_item'>O</div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
