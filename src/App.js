import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading';
let Home = React.lazy(() => import('./pages/Home/Home.jsx'))
let LifeSevice = React.lazy(() => import('./pages/LifeSevice.jsx'))
let Login = React.lazy(() => import('./pages/login/Login.jsx'))
let Market = React.lazy(() => import('./pages/Market.jsx'))
let Mine = React.lazy(() => import('./pages/Mine.jsx'))
let List = React.lazy(() => import('./pages/List/List.jsx'))
let ShopCar = React.lazy(() => import('./pages/ShopCar/ShopCar.jsx'))
let Details = React.lazy(() => import('./pages/Details/Details.jsx'))
let City = React.lazy(() => import('./pages/City/City.jsx'))
let NotFound = React.lazy(() => import('./components/NotFound.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/lifeSevice' component={LifeSevice}></Route>
          <Route path='/login'  component={Login}></Route>
          <Route path='/market'  component={Market}></Route>
          <Route path='/mine'  component={Mine}></Route>
          {/* 列表页需要知道搜索的关键字是什么 */}
          <Route path='/list/:keyword' component={List}></Route>
          <Route path='/shopCar'  component={ShopCar}></Route>
          {/* 详情页需要添加id */}
          <Route path='/details/:id' component={Details}></Route>
          <Route path='/city'  component={City}></Route>
          <Route path='*' exact component={NotFound}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
