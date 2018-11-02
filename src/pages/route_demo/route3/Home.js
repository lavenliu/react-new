import React from 'react';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/main'>Home 2</Link>
                    </li>
                    <li>
                        <Link to='/about'>About 2</Link>
                    </li>
                    <li>
                        <Link to='/topics'>Topics 2</Link>
                    </li>
                    {/* 处理 404 的页面 */}
                    <li>
                        <Link to='/lavenliu'>LavenLiu</Link>
                    </li>
                    <li>
                        <Link to='/taoqi'>TaoQi</Link>
                    </li>
                </ul>
                <hr/>
                { this.props.children }
            </div>
        )
    }
}