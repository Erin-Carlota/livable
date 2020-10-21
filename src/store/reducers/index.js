// 合并reducer
import {combineReducers} from 'redux';
import cityReducer from './city';
import  userReducer from './user'

const all = combineReducers({
    city:cityReducer,
    user:userReducer
})

export default all;