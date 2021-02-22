import React from 'react';
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

const AppBars =()=>{
    return(
        <AppBar >
            <Toolbar>
                <Box width='100%' display="flex" justifyContent="center">
                <Typography variant="h6">Jokes</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default AppBars;