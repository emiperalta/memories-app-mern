import { Router } from 'express';

import * as postController from '../controllers/post.controller';

const router = Router();

router.get('/posts', postController.getPosts);

router.post('/posts', postController.createPost);

router.put('/posts/:id', postController.updatePost);

export default router;
