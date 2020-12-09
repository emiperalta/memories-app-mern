export interface IPost {
    _id?: string | number;
    title: string;
    message: string;
    creator: string;
    tags?: string[];
    selectedFile: string;
    likesCount?: number;
    createdAt?: Date;
    currentId?: string | number;
    setCurrentId?: (id: string | number) => void;
}

export type PostProps = {
    currentId?: string | number;
    setCurrentId?: (id: string | number) => void;
};
