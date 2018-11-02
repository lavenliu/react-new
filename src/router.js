import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NotFound from './pages/not_found/index'


export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <App>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                <Route component={NotFound}></Route>
                            </Admin>
                        }></Route>
                        <Route path='/order/detail' component={Login}></Route>
                    </App>
                </div>
            </Router>
        )
    }
}