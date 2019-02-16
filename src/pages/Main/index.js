import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from "./components/Tabs";


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: 775,
        width: 750,
        margin: '50px auto auto auto'
    },
});

class Main extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Main metrics
                </Typography>
                <Tabs value={this.state.value} handleChange={this.handleChange}/>
            </Paper>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
