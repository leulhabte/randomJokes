import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './Styling';

const Default = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.cardDefault}>
            <Typography>Content goes here</Typography>
        </Paper>
    );

}

export default Default;