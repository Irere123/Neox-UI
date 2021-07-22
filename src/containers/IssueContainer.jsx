import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Box, Typography } from '@material-ui/core';

import Finds from '../components/kallen/Finds';
import Discussions from '../components/kallen/Discussions';
import Insights from '../components/kallen/Insights';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function IssueContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label='Finds' {...a11yProps(0)} />
        <Tab label='Discussions' {...a11yProps(1)} />
        <Tab label='Insights' {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Finds />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Discussions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Insights />
      </TabPanel>
    </div>
  );
}

export default IssueContainer;
