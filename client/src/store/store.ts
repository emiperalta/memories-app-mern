import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/index.reducer';

export const store: Store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
);
