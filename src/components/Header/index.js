import React from 'react'
import { Row, Col } from 'antd'

import Util from '../../utils/utils'
import axios from '../../axios'

import './index.less'


export default class Header extends React.Component {

    componentWillMount() {
        this.setState({
            userName: 'LavenLiu'
        })

        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)

        this.getWeahterAPIData()
    }

    getWeahterAPIData() {
        const city = '上海'  // Chinese needed to be encoded
        const apiURL = 'http://api.map.baidu.com/telematics/v3/weather?location='
        const outputFormat = '&output=json'
        const accessKey = '&ak=3p49MVra6urFRGOT9s8UBWr2'
        axios.jsonp({
            url: apiURL + encodeURIComponent(city) + outputFormat + accessKey
        }).then((res) => {
            // console.log(res)
            if (res.status === 'success') {
                const data = res.results[0].weather_data[0]
                this.setState({
                    dayPicture: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return (
            // <div>This is Header</div>
            // Header component has two part, we use two `Row` to realize it
            // 1. User info
            // 2. Datetime, weather
            <div className="header">
                {/* user info */}
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="http://baidu.com">退出</a>
                    </Col>
                </Row>

                {/* breadcurmb and weather */}
                <Row className="breadcrumb">
                    {/* current navi info, use Redux to pass value */}
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    {/* datetime and weather */}
                    <Col span="20" className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <span className="weather-img">
                            <img src={ this.state.dayPicture } alt="weather info"/>
                        </span>
                        <span className="weather-detail">{ this.state.weather }</span>
                    </Col>
                </Row>
            </div>
        )
    }
}