import React, { useState, useEffect } from 'react';
import useStyles from './Styling';
import Card from './Card'
import Loading from "./Loading";
import SnackBar from '../SnackBar/SnackBars';
import Default from './Default';
import { Container, Grid, Button, Box } from "@material-ui/core";
import axios from 'axios';

const Jokes = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    const [display, setDisplay] = useState(true);
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [open, setOpen] = React.useState(false);
    const [messageType, setMessageType] = useState("");
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const fetchApi = async () => {
        try {
            setDisplay(false)
            setLoad(true);
            var options = {
                method: 'GET',
                url: 'https://joke3.p.rapidapi.com/v1/joke/',
                headers: {
                    'x-rapidapi-key': '9214729ffemsh878f61adb83658fp1c2b1ejsn6014ee49d429',
                    'x-rapidapi-host': 'joke3.p.rapidapi.com'
                }
            };

            const res = await axios(options);
            setData(res.data);
            setLoad(false);
        } catch (e) {
            setLoad(false);
            setDisplay(true);
            setMessage("Error Fetching data");
            setMessageType('error')
            setOpen(true);
        }
    }

    const voteJoke = async (vote, id) => {
        try {
            setLoad(true);
            var options = {
                method: 'POST',
                url: `https://joke3.p.rapidapi.com/v1/joke/${id}/${vote}`,
                headers: {
                    'x-rapidapi-key': '9214729ffemsh878f61adb83658fp1c2b1ejsn6014ee49d429',
                    'x-rapidapi-host': 'joke3.p.rapidapi.com'
                }
            };
            const res = await axios(options);
            setData(res.data);
            setLoad(false);
        } catch (e) {
            setLoad(false);
            setDisplay(true);
            setMessage("Something went wrong");
            setMessageType('error')
            setOpen(true);
        }
    }

    useEffect(()=>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;
        setDate(today)
    },[])

    return (
        <Container>
            <Box height={50} />
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item md={6} xs={10}>
                    <Button color="primary" classes={{root: classes.btn}} onClick={fetchApi} >Get Random Joke</Button>
                </Grid>
                {!display ? <Grid item md={6} xs={10}>
                    {!load && <Card jokes={data} voteJoke={voteJoke} date={date}/>}
                    {load && <Loading />}
                </Grid> : <Grid item md={6} xs={10}><Default/></Grid>}
            </Grid>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
        </Container>
    )

}

export default Jokes;