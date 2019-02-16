/* eslint-disable no-unused-expressions */
import React from "react";
import {withStyles} from "@material-ui/core/styles/index";
import MuiTab from "@material-ui/core/Tab";

import blue from '@material-ui/core/colors/blue';

const styles = {
    root: {
        width: 100,
        borderRight: "1px solid #D9D9D9",
        color: "#4A4A4A",
        fontSize: 14,
        '&:last-child': {border: "none"},
        '&$selected': {color: "white"}
    },
    selected: {
        backgroundColor: blue[500],
        border: "none"
    },
};

const Tab = props => <MuiTab {...props} />;

export default withStyles(styles)(Tab);
