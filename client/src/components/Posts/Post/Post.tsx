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
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
import { IPost } from '../../../api/types';

const Post: React.FC<IPost> = props => {
    const classes = useStyles();

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
                    onClick={() => {}}
                >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {props.tags?.map(tag => `#${tag} `)}
                </Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>
                    {props.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    {props.likesCount}
                </Button>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
