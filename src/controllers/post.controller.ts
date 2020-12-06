import { Request, Response } from 'express';

import Post from '../models/Post';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        return res.json(posts);
    } catch (err) {
        return res.json({ error: err.message });
    }
};
