import React from 'react';

import Header from '../components/Header';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div>
      <Header />
      <div className='dashboard-layout'>
        <div className='top-user'>
          <div className='image-reward'></div>
          <h1>Top Contributor</h1>

          <h2>Ben Awad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum illo dolor qui fugiat vero aspernatur officia repudiandae
            omnis suscipit?
          </p>
          <div className='emoji-awards'>
            <span className='cool'>😎🎉 150x Cool</span>
            <span className='crown'>🤴 20 Crowns</span>
          </div>
        </div>
        <div className='rare-contributors'>
          <div className='rare-header'>
            <div className='your-score'>
              <h1>Your Score</h1>
              <h2>#24 Bob</h2>
              <h3 className='cool'>😎56x Cool</h3>
            </div>
            <div className='other-users'>
              <h3>More Users</h3>
              <h2>#5 Young Dylan</h2>
              <button className='btn__loadmore'>Load More</button>
            </div>
          </div>
          <div className='cards-rare-contrs'>
            <div className='user-card-rare'>
              <h1>#2</h1>
              <h3>Nyaxo Commedy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus porro atque repellat accusantium omnis voluptate quasi
                accusamus ipsam libero repudiandae.
              </p>
              <div className='emoji-awards'>
                <span className='cool-rare'>😎 123 Cool</span>
                <span className='crown-rare'>🤴 13 Crowns</span>
              </div>
            </div>

            <div className='user-card-rare'>
              <h1>#3</h1>
              <h3>DogeHouse</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus porro atque repellat accusantium omnis voluptate quasi
                accusamus ipsam libero repudiandae.
              </p>
              <div>
                <span>😎 115 Cool</span>
                <span>🤴 8 Crowns</span>
              </div>
            </div>
            <div className='user-card-rare'>
              <h1>#4</h1>
              <h3>FamilyGuy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus porro atque repellat accusantium omnis voluptate quasi
                accusamus ipsam libero repudiandae.
              </p>
              <div>
                <span>😎 110 Cool</span>
                <span>🤴 5 Crowns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
