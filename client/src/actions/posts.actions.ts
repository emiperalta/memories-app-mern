import * as api from '../api';
import { Dispatch } from 'redux';

import { IPost } from '../api/types';

export const ACTION_TYPES = {
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
    UPDATE_POST: 'UPDATE_POST',
    DELETE_POST: 'DELETE_POST',
};

export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        const res = await api.fetchPosts();

        dispatch({
            type: ACTION_TYPES.FETCH_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
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
        console.log(err);
    }
};

export const updatePost = (
    postId: string | number,
    updatedPost: IPost
) => async (dispatch: Dispatch) => {
    try {
        const res = await api.updatePost(postId, updatedPost);

        dispatch({
            type: ACTION_TYPES.UPDATE_POST,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = (postId: string | number) => async (
    dispatch: Dispatch
) => {
    try {
        await api.deletePost(postId);

        dispatch({
            type: ACTION_TYPES.DELETE_POST,
            payload: postId,
        });
    } catch (err) {
        console.log(err);
    }
};
