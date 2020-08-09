import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import noDuplicates from './middleware/noDuplicates';

const store = createStore(reducers,
    composeWithDevTools(
    applyMiddleware(thunk, noDuplicates)));

export default store