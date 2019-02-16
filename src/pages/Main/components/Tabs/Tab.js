import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import MuiTab from '@material-ui/core/Tab';

import blue from '@material-ui/core/colors/blue';

const styles = {
  root: {
    width: 100,
    height: 32,
    minHeight: 'inherit',
    minWidth: 'fit-content',
    borderRight: '1px solid #D9D9D9',
    color: '#4A4A4A',
    fontSize: 14,
    '&:last-child': { borderRight: 'none', minWidth: 'max-content' },
    '&$selected': { color: 'white' },
  },
  selected: {
    backgroundColor: blue[500],
  },
};

const Tab = props => <MuiTab {...props} />;

export default withStyles(styles)(Tab);
