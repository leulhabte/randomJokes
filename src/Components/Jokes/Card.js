import React from 'react';
import useStyles from './Styling';
import {ThumbUpAlt, ThumbDownAlt} from '@material-ui/icons';
import {withStyles} from '@material-ui/styles'
import { Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton, Tooltip, Divider, Box } from '@material-ui/core';

const Cards =({jokes, voteJoke, date})=>{
    const classes = useStyles();
    return(
      <Card>
          <CardHeader
            avatar={
                <Avatar>J</Avatar>
            }
            title="Random Jokes"
            subheader={date}
          />
          <CardContent>
              <Typography>{jokes.content}</Typography>
              <Box height={6}/>
              <Divider/>
              <Box height={6}/>
              <Typography className={classes.votes}>Upvote {jokes.upvotes}</Typography>
              <Typography className={classes.votes}>Downvote {jokes.downvotes}</Typography>
          </CardContent>
          <CardActions>
              <IconButton onClick={()=>{voteJoke('upvote', jokes.id)}}><Tooltip title="Upvote"><ThumbUpAlt className={classes.up}/></Tooltip></IconButton>
              <IconButton onClick={()=>{voteJoke('downvote', jokes.id)}}><Tooltip title="DownVote"><ThumbDownAlt className={classes.down}/></Tooltip></IconButton>
          </CardActions>
      </Card>  
    );

}

export default withStyles(useStyles)(Cards);