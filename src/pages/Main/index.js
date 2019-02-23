import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

import Tabs from './components/Tabs';
import Searches from './components/Searches';
import Clicks from './components/Clicks';
import Bookings from './components/Bookings';
import SystemInfo from './components/SystemInfo';

import actions from '../../store/actions';


import styles from './styles';

class Main extends Component {
  componentDidMount() {
    const { fetchData, tabValue } = this.props;
    fetchData(tabValue);
  }

  handleChange = (event, value) => {
    const { fetchData } = this.props;
    fetchData(value);
  };

  getStatistics = () => {
    const {
      props: {
        data: {
          errors, avgErrors, zeroes, avgZeroes, timeout, avgTimeout,
        } = {},
      },
    } = this;
    return {
      errors, avgErrors, zeroes, avgZeroes, timeout, avgTimeout,
    };
  };

  getCurrentPeriod = (period) => {
    switch (period) {
      case 0:
        return 'Last hour';
      case 1:
        return 'Today';
      case 2:
        return 'Yesterday';
      case 3:
        return 'Last 3 days';
      default:
        return null;
    }
  };

  getPreviousPeriod = (period) => {
    switch (period) {
      case 0:
        return 'Previous Last hour';
      case 1:
        return `Previous ${moment().format('dddd')}`;
      case 2:
        return `Previous ${moment().subtract(1, 'days').format('dddd')}`;
      case 3:
        return 'Previous Last 3 days';
      default:
        return null;
    }
  };

  render() {
    const {
      classes, tabValue, errors, data, isFetching, apiError,
    } = this.props;
    const periods = {
      currentPeriod: this.getCurrentPeriod(tabValue),
      previousPeriod: this.getPreviousPeriod(tabValue),
    };
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h3" gutterBottom>
          Main metrics
        </Typography>
        <Tabs value={tabValue} handleChange={this.handleChange} />
        {!isFetching
          && (
            apiError
              ? <Typography variant="h1">{apiError.message}</Typography>
              : (
                <React.Fragment>
                  <SystemInfo errors={errors} statistics={this.getStatistics()} />
                  <Searches {...{ ...data, ...periods }} />
                  <Divider variant="middle" />
                  <Clicks {...{ ...data, ...periods }} />
                  <Divider variant="middle" />
                  <Bookings {...{ ...data, ...periods }} />
                </React.Fragment>
              )
          )}
      </Paper>
    );
  }
}

const mapStateToProps = ({ periodIndex, ...state }) => ({
  tabValue: periodIndex,
  ...state,
});
const mapDispatchToProps = dispatch => ({
  fetchData: periodIndex => dispatch(actions.fetchData(periodIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
