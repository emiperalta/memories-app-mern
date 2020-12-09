import { RequestHandler } from 'express';
import mongoose from 'mongoose';

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

export const updatePost: RequestHandler = async (req, res) => {
    try {
        const { title, message, creator, tags, selectedFile } = req.body;
        const { id } = req.params;

        const update = new Post({
            title: title,
            message: message,
            creator: creator,
            tags: tags,
            selectedFile: selectedFile,
            createdAt: new Date(), // to show on the frontend the time when the update was made
            _id: id,
        });

        const updatedPost = await Post.findByIdAndUpdate(id, update, {
            new: true,
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
