import {createStore} from 'redux';
import all from './reducers'


const store = createStore(all,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;