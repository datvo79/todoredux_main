import {createStore} from 'https://cdn.skypack.dev/redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
