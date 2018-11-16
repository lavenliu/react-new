import React from 'react'
import { Row } from 'antd';

import Header from './components/Header'
import Footer from './components/Footer'

import './style/common.less'


export default class Common extends React.Component {
    // 通用页面结构
    render() {
        return (
            <div>
                <Row className="container">
                    <Header />
                </Row>
                <Row className="content">
                    {/* Content, Home is static */}
                    {/* <Home /> */}
                    {/* this is dynamic */}
                    { this.props.children }
                </Row>
                <Row>
                    <Footer />
                </Row>
            </div>
        )
    }
}