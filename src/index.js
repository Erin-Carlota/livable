import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/css/reset.css'
import './static/font/iconfont.css'
import {Provider} from 'react-redux'
import store from './store';
import setuser from './store/actions/user'
// 把本地存储的用户名在这里重新存储到redux中
let user = localStorage.getItem('goodlive-user');
if(user){
  store.dispatch(setuser(user))
}

ReactDOM.render(
  // 关联redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

