import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', postRoutes);

export { app };
