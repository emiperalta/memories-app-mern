import { Document } from 'mongoose';

export interface PostInterface extends Document {
    title: string;
    message: string;
    creator: string;
    tags: string[];
    selectedFile: string;
    likesCount: number;
    createdAt: Date;
}
