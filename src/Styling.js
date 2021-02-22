import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
    }
}));

export default useStyles;