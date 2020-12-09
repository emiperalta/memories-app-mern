import { Router } from 'express';

import * as postController from '../controllers/post.controller';

const router = Router();

router.get('/posts', postController.getPosts);

router.post('/posts', postController.createPost);

router.patch('/posts/:id', postController.updatePost);

router.patch('/posts/:id/likePost', postController.likePost);

router.delete('/posts/:id', postController.deletePost);

export default router;
