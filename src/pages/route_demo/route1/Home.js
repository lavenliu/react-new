import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import Main from './main'
import About from './about'
import Topics from './topics'


export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                {/* HashRouter 里面要有一个根节点，需要用一个div进行包裹 */}
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}