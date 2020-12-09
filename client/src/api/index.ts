import axios from 'axios';

import { IPost } from './types';

const URL = 'http://localhost:5000/api/posts';

export const fetchPosts = () => axios.get(URL);

export const createPost = (newPost: IPost) => axios.post(URL, newPost);

export const updatePost = (postId: string | number, updatedPost: IPost) =>
    axios.patch(URL + '/' + postId, updatedPost);

export const deletePost = (postId: string | number) =>
    axios.delete(URL + '/' + postId);
