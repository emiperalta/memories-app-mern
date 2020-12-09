import { ACTION_TYPES } from '../actions/posts.actions';
import { IPost } from '../api/types';

const initialState = []!;

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_POSTS:
            return action.payload;
        case ACTION_TYPES.CREATE_POST:
            return [...state, action.payload];
        case ACTION_TYPES.UPDATE_POST:
            return state.map((post: IPost) =>
                post._id === action.payload._id ? action.payload : post
            );
        case ACTION_TYPES.DELETE_POST:
            return state.filter((post: IPost) => post._id !== action.payload);
        default:
            return state;
    }
};

export default postsReducer;
