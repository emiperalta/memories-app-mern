import { Schema, model } from 'mongoose';
import { PostInterface } from '../util/types';

const PostSchema: Schema = new Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likesCount: { type: Number, default: 0 },
        createdAt: { type: Date, default: new Date() },
    },
    {
        versionKey: false,
    }
);

export default model<PostInterface>('Post', PostSchema);
