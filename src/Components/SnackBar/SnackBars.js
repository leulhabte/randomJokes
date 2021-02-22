import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBars = ({ type, handleClose, open, message }) => {
    return (
        <div>
            {type === "success" ? (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {message}
                      </Alert>
                </Snackbar>
            ) : <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
            </Alert>
                </Snackbar>}
        </div>

    );

}

export default SnackBars;