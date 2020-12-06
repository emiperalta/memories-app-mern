import mongoose, { ConnectionOptions } from 'mongoose';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI!;
const mongooseOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

(async () => {
    await mongoose.connect(MONGODB_URI, mongooseOptions, () =>
        console.log('DB connected')
    );
})();
