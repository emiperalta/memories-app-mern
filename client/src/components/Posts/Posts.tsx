import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';
import { IPost } from '../../api/types';

const Posts: React.FC = () => {
    // use the posts reducer
    const posts = useSelector((state: RootStateOrAny) => state.posts);
    const classes = useStyles();

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.mainContainer}
            container
            alignItems='stretch'
            spacing={3}
        >
            {posts.map((post: IPost) => (
                <Grid key={post.id} item xs={12} sm={6}>
                    <Post {...post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
