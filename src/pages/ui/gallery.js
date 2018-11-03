import React from 'react';
import { Card, Row, Col, Modal } from 'antd';

import './ui.less'


export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openGallery = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: '/gallery/' + imgSrc
        })
    }

    render() {
        const images = [
            ['16.jpeg', '2.png', '3.png', '4.png', '5.png', '16.jpeg'],
            ['6.png', '7.png', '8.png', '9.png', '10.png', '17.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png', '21.jpeg'],
            ['20.jpeg', '17.jpeg', '21.jpeg', '25.jpeg', '18.jpeg', '19.jpeg']
        ]
        const imgList = images.map((list) => list.map((item, key) =>
            <Card
                style={{marginBottom:5}}
                cover={<img src={'/gallery/'+item} />}
                onClick={() => this.openGallery(item)}
                key={key}>
                <Card.Meta title='Admin site' description='beauty image' />
            </Card>
        ))

        return (
            <div className='card-wrap'>
                <Row gutter={5}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                    <Col md={6}>
                        {imgList[4]}
                    </Col>
                    <Col md={6}>
                        {imgList[5]}
                    </Col>
                </Row>
                <Modal
                    title='维多利亚的秘密'
                    visible={this.state.visible}
                    footer={null}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}>
                    <img src={this.state.currentImg} alt="" style={{width: '100%'}} />
                </Modal>
            </div>
        )
    }
}