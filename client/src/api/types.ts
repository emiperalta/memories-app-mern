export interface IPost {
    id?: string;
    title: string;
    message: string;
    creator: string;
    tags?: [string];
    selectedFile: string;
    likesCount: number;
    createdAt: Date;
}
