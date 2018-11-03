import React from 'react';
import { Card, Carousel } from 'antd';

import './ui.less'


export default class MyCarousel extends React.Component {

    render() {

        return (
            <div>
                <Card title="文字背景轮播" className='card-wrap'>
                    <Carousel autoplay effect='fade'>
                        <div><h3>LavenLiu</h3></div>
                        <div><h3>TaoQi</h3></div>
                        <div><h3>James</h3></div>
                        <div><h3>Wade</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className='slider-wrap'>
                    <Carousel autoplay>
                        <div>
                            <img src="/carousel/carousel-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel/carousel-2.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel/carousel-3.jpg" alt=""/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}