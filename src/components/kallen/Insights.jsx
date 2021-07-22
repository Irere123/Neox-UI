import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kallen/Insights.css';

function Insights() {
  return (
    <div className='insights-layout'>
      <div className='insights-settings'>
        <div className='teams-insights'>
          <h3>Team</h3>
          <div className='teams-list-insights'>
            <div className='home_team_list_item'>M</div>
            <div className='home_team_list_item'>F</div>
            <div className='home_team_list_item'>N</div>
          </div>
          <p>These are team where this issue is open.Only team members of these teams can see this issue</p>
        </div>
        <div className='members-insights'>
          <h3>Contributors</h3>
        </div>
      </div>
      <div className='statistics-insights'>Statistics</div>
    </div>
  );
}

export default Insights;
