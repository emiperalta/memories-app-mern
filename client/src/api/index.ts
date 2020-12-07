import axios from 'axios';

import { IPost } from './types';

const URL = 'http://localhost:5000/api/posts';

export const fetchPosts = () => axios.get(URL);

export const createPost = (newPost: IPost) => axios.post(URL, newPost);
