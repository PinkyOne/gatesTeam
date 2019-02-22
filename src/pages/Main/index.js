import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tabs from './components/Tabs';
import Searches from './components/Searches';
import Clicks from './components/Clicks';
import Bookings from './components/Bookings';
import SystemInfo from './components/SystemInfo';
import actions from '../../store/actions';


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
  handleChange = (event, value) => {
    const { changePeriod } = this.props;
    changePeriod(value);
  };

  render() {
    const { props: { classes, tabValue } } = this;

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h3" gutterBottom>
          Main metrics
        </Typography>
        <Tabs value={tabValue} handleChange={this.handleChange} />
        <SystemInfo />
        <Searches isImprovement />
        <Divider variant="middle" />
        <Clicks />
        <Divider variant="middle" />
        <Bookings isImprovement />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  tabValue: state.periodIndex,
});
const mapDispatchToProps = dispatch => ({
  changePeriod: periodIndex => dispatch(actions.changePeriod(periodIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
