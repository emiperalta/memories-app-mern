import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56%',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
}));