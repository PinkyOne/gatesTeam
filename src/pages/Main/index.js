import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tabs from './components/Tabs';
import Searches from './components/Searches';
import Clicks from './components/Clicks';
import Bookings from './components/Bookings';
import SystemInfo from './components/SystemInfo';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 775,
    width: 750,
    margin: '50px auto auto auto',
  },
});

class Main extends Component {
    state = {
      value: 0,
    };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { props: { classes }, state: { value } } = this;

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom>
          Main metrics
        </Typography>
        <SystemInfo />
        <Tabs value={value} handleChange={this.handleChange} />
        <Searches isImprovement />
        <Divider variant="middle" />
        <Clicks />
        <Divider variant="middle" />
        <Bookings isImprovement />
      </Paper>
    );
  }
}

export default withStyles(styles)(Main);
