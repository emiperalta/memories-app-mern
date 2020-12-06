import { Request, Response } from 'express';

import Post from '../models/Post';
import { postInputValidation } from '../util/validation';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        await postInputValidation(req.body);

        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
