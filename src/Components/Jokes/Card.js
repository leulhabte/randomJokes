import React from 'react';
import useStyles from './Styling';
import {ThumbUpAlt, ThumbDownAlt} from '@material-ui/icons';
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
              <Typography classes={{root: classes.votes}}>Upvote {jokes.upvotes}</Typography>
              <Typography classes={{root: classes.votes}}>Downvote {jokes.downvotes}</Typography>
          </CardContent>
          <CardActions>
              <IconButton onClick={()=>{voteJoke('upvote', jokes.id)}}><Tooltip title="Upvote"><ThumbUpAlt classes={{root: classes.up}}/></Tooltip></IconButton>
              <IconButton onClick={()=>{voteJoke('downvote', jokes.id)}}><Tooltip title="DownVote"><ThumbDownAlt classes={{root: classes.down}}/></Tooltip></IconButton>
          </CardActions>
      </Card>  
    );

}

export default Cards;