import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Admin from './admin'

// import LifeCycle from './pages/demo/LifeCycle'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));

serviceWorker.unregister();
