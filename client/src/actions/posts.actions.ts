import * as api from '../api';
import { Dispatch } from 'redux';

import { IPost } from '../api/types';

export const ACTION_TYPES = {
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
};

export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        const res = await api.fetchPosts();

        dispatch({
            type: ACTION_TYPES.FETCH_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const createPost = (newPost: IPost) => async (dispatch: Dispatch) => {
    try {
        const res = await api.createPost(newPost);

        dispatch({
            type: ACTION_TYPES.CREATE_POST,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
