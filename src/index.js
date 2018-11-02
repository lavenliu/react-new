import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin'
// router demo1, 混合式
// import Home from './pages/route_demo/route1/Home'
// router demo2, 分离式
// import Router from './pages/route_demo/route2/router'
// router demo3, 分离式, 获取路由参数
// import Router from './pages/route_demo/route3/router'
import Router from './router'

// import LifeCycle from './pages/demo/LifeCycle'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Admin />, document.getElementById('root'));
// route demo 1
// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
