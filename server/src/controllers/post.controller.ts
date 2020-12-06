import { RequestHandler } from 'express';

import Post from '../models/Post';
import { postInputValidation } from '../util/validation';

export const getPosts: RequestHandler = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const createPost: RequestHandler = async (req, res) => {
    try {
        await postInputValidation(req.body);

        const newPost = new Post(req.body);
        await newPost.save();

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
