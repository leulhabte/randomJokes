import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    btn:{
        color: 'white',
        backgroundColor: 'rgb(111, 190, 230)',
        marginTop: theme.spacing(2),
        '&:hover':{
            backgroundColor: 'rgb(39, 158, 218)'
        },
        height: '3rem',
        width: '40%'
    },
    up:{
        color: 'blue'
    },
    down:{
        color: 'red'
    },
    votes:{
        fontSize: '13px',
        fontWeight: 'bold'
    },
    cardDefault:{
        height: '15rem',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default useStyles;