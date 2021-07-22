import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kallen/Finds.css';

function Finds() {
  return (
    <div className='issue-finds-layout'>
      <div className='header-finds'>
        <h2>People Finds</h2>
        <div>
          <button className='btn_publish'>Publish</button>
        </div>
      </div>
      <div className='content-finds'>
        <div className='discovery-card'>
          <div className='discovery-card-header'>
            <Avatar />
            <div className='user-details-card-header'>
              <h2>Tyler Perry</h2>
              <h3>a few seconds ago</h3>
            </div>
          </div>
          <div className='discovery-card-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos voluptates vel suscipit perferendis aperiam voluptatem
              modi sapiente repellat quas perspiciatis doloremque, placeat, eveniet architecto autem similique, est officia itaque.
            </p>
          </div>
          <div className='discovery-card-footer'>
            <span>True 12</span>

            <span>False 5</span>
          </div>
        </div>
        <div className='discovery-card'>
          <div className='discovery-card-header'>
            <Avatar />
            <div className='user-details-card-header'>
              <h2>Doja cat</h2>
              <h3>2 hours ago</h3>
            </div>
          </div>
          <div className='discovery-card-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos voluptates vel suscipit perferendis aperiam voluptatem
              modi sapiente repellat quas perspiciatis doloremque, placeat, eveniet architecto autem similique, est officia itaque.
            </p>
          </div>
          <div className='discovery-card-footer'>
            <span>True 10</span>

            <span>False 50</span>
          </div>
        </div>
        <div className='discovery-card'>
          <div className='discovery-card-header'>
            <Avatar />
            <div className='user-details-card-header'>
              <h2>Niyo Bosco</h2>
              <h3>4 days ago</h3>
            </div>
          </div>
          <div className='discovery-card-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos voluptates vel suscipit perferendis aperiam voluptatem
              modi sapiente repellat quas perspiciatis doloremque, placeat, eveniet architecto autem similique, est officia itaque.
            </p>
          </div>
          <div className='discovery-card-footer'>
            <span>True 39</span>

            <span>False 12</span>
          </div>
        </div>
        <div className='discovery-card'>
          <div className='discovery-card-header'>
            <Avatar />
            <div className='user-details-card-header'>
              <h2>Nel Ngabo</h2>
              <h3>5 days ago</h3>
            </div>
          </div>
          <div className='discovery-card-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos voluptates vel suscipit perferendis aperiam voluptatem
              modi sapiente repellat quas perspiciatis doloremque, placeat, eveniet architecto autem similique, est officia itaque.
            </p>
          </div>
          <div className='discovery-card-footer'>
            <span>True 20</span>

            <span>False 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finds;
