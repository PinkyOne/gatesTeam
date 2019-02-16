import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from './components/Tabs';
import Searches from './components/Searches';


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
        <Tabs value={value} handleChange={this.handleChange} />
        <Searches />
      </Paper>
    );
  }
}

export default withStyles(styles)(Main);
