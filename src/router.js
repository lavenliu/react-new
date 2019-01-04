import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import MyForm from './pages/form/login'
import MyRegister from './pages/form/register'
import BasicTable from './pages/table/BasicTable'
import RadioTable from './pages/table/RadioTable'
import CheckTable from './pages/table/CheckTable'
import HighTable from './pages/table/HighTable'
import City from './pages/city'
import Order from './pages/order'
import User from './pages/user'
import Bar from './pages/echarts/bar'
import RichText from './pages/rich'
import LogDemo01 from './pages/log/Demo01'
import Common from './common'
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
                                <Switch>
                                    <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                    <Route path='/admin/ui/modals' component={Modals}></Route>
                                    <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                    <Route path='/admin/ui/notification' component={Notice}></Route>
                                    <Route path='/admin/ui/messages' component={Messages}></Route>
                                    <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                    <Route path='/admin/ui/gallery' component={Gallery}></Route>
                                    <Route path='/admin/ui/carousel' component={Carousel}></Route>
                                    <Route path='/admin/form/login' component={MyForm}></Route>
                                    <Route path='/admin/form/reg' component={MyRegister}></Route>
                                    <Route path='/admin/table/basic' component={BasicTable}></Route>
                                    <Route path='/admin/table/radio' component={RadioTable}></Route>
                                    <Route path='/admin/table/checkbox' component={CheckTable}></Route>
                                    <Route path='/admin/table/high' component={HighTable}></Route>
                                    <Route path='/admin/city' component={City}></Route>
                                    <Route path='/admin/order' component={Order}></Route>
                                    <Route path='/admin/user' component={User}></Route>
                                    <Route path='/admin/charts/bar' component={Bar}></Route>
                                    <Route path='/admin/rich' component={RichText}></Route>
                                    <Route path='/admin/log/demo01' component={LogDemo01}></Route>
                                    <Route component={NotFound}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/common' render={() =>
                            <Common>
                                <Route path='/common/order/detail/:orderId' component={Login}></Route>
                            </Common>
                        }>
                        </Route>
                    </App>
                </div>
            </Router>
        )
    }
}