import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', postRoutes);

export { app };
