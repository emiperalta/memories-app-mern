import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        color: 'white',
        backgroundColor: '#64c5b7',
        '&:hover': {
            backgroundColor: '#43b3a2',
        },
    },
    buttonClear: {
        color: 'white',
        backgroundColor: '#92cac2',
        '&:hover': {
            backgroundColor: '#85b4ad',
        },
    },
}));
