import { app } from './app';
import './database';
import 'dotenv/config';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running at http://${HOST}:${PORT}`));
