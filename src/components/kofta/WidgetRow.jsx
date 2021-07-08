import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../../styles/kofta/WidgetsRow.css';

function WidgetsRow({ about, title }) {
  return (
    <div>
      <h4>Sponsored</h4>
      <div className='sidebarRow mt-4'>
        {about && (
          <Card className='root'>
            <div className='details'>
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography component='h5' variant='h5'>
                  {title}
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {about}
                </Typography>
              </CardContent>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default WidgetsRow;
