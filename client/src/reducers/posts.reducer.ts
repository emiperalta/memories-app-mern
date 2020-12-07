import { ACTION_TYPES } from '../actions/posts.actions';

const initialState = []!;

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_POSTS:
            return action.payload;
        case ACTION_TYPES.CREATE_POST:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default postsReducer;
