import React from 'react';
import moment from 'moment';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';
import { IPost } from '../../../api/types';

const Post: React.FC<IPost> = (props: IPost) => {
    const classes = useStyles();

    const editHandler = () => props.setCurrentId!(props._id!);

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
                <Typography variant='h6' gutterBottom>
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
                    onClick={() => {}}
                >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
