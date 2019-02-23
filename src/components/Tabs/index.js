import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTabs from '@material-ui/core/Tabs';

import Tab from './Tab';

import './index.css';

const styles = () => ({
  root: {
    height: 32,
    minHeight: 'inherit',
    minWidth: 'inherit',
    width: 497,
    border: '1px solid #D9D9D9',
    borderRadius: 7,
  },
  indicator: {
    display: 'none',
  },
});

const Tabs = ({ value, handleChange, ...rest }) => (
  <MuiTabs
    {...rest}
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    scrollButtons="off"
  >
    <Tab label="Last hour" />
    <Tab label="Today" />
    <Tab label="Yesterday" />
    <Tab label="Last 3 days" />
  </MuiTabs>
);

export default withStyles(styles, { withTheme: true })(Tabs);
