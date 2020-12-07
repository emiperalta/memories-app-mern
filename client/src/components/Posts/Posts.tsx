import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    // use the posts reducer
    const posts = useSelector((state: RootStateOrAny) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            <h1>Posts component</h1>
            <Post />
        </>
    );
};

export default Posts;
