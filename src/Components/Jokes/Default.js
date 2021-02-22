import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    cardDefault:{
        height: '15rem',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Default = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.cardDefault}>
            <Typography>Content goes here</Typography>
        </Paper>
    );

}

export default Default;