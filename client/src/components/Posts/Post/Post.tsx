import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';
import { IPost } from '../../../api/types';
import { deletePost } from '../../../actions/posts.actions';

const Post: React.FC<IPost> = (props: IPost) => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();

    const editHandler = () => props.setCurrentId!(props._id!);

    const deleteHandler = () => dispatch(deletePost(props._id!));

    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.selectedFile}
                title={props.title}
            />
            <div className={classes.overlay}>
                <Typography variant='h6'>{props.creator}</Typography>
                <Typography variant='body2'>
                    {moment(props.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size='small'
                    onClick={editHandler}
                >
                    <EditIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {props.tags?.map(tag => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant='h6' gutterBottom>
                {props.title}
            </Typography>
            <CardContent>
                <Typography variant='subtitle1' gutterBottom>
                    {props.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size='small'
                    className={classes.cardButtons}
                    onClick={() => {}}
                >
                    <ThumbUpAltIcon fontSize='small' />
                    Like {props.likesCount}
                </Button>
                <Button
                    size='small'
                    className={classes.cardButtons}
                    onClick={openHandler}
                >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
                <Dialog
                    open={open}
                    onClose={closeHandler}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                >
                    <DialogTitle id='alert-dialog-title'>
                        {'Delete post'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            Are you sure you want to delete this post?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={closeHandler}
                            className={classes.cardButtons}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={deleteHandler}
                            className={classes.cardButtons}
                            autoFocus
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </CardActions>
        </Card>
    );
};

export default Post;
