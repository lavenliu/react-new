import React from 'react';
import { Card, Button, Modal } from 'antd';

import './ui.less'


export default class Modals extends React.Component {

    state = {
        // visible: false
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOpen = (who) => {
        this.setState({
            [who]: true
        })
    }

    handleOpen1 = (who) => {
        this.setState({
            [who]: false
        })
    }

    handleClose = (who) => {
        this.setState({
            [who]: false
        })
    }

    handleOk = (event) => {
        console.log(event)
        this.setState({
            visible: false
        })
    }

    handleCancel = (event) => {
        console.log(event)
        this.setState({
            visible: false
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: 'Are you sure?',
            content: 'Are you OK?',
            onOk() {
                console.log('Ok')
            },
            onCancel() {
                console.log('Cancel')
            }
        })
    }

    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    {/* <Button type='primary' onClick={this.showModal}>Open Modal</Button> */}
                    <Button type='primary' onClick={() => {this.handleOpen('showModal1')}}>
                        Open Modal
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal2')}}>
                        自定义页脚
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal3')}}>
                        顶部20px弹框
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal4')}}>
                        水平居中弹框
                    </Button>
                </Card>
                <Card title='信息确认框' className='card-wrap'>
                    {/* <Button type='primary' onClick={this.showModal}>Open Modal</Button> */}
                    <Button type='primary' onClick={() => {this.handleConfirm('confirm')}}>
                        Confirm
                    </Button>
                    <Button type='primary' onClick={() => {this.handleConfirm('success')}}>
                        Success
                    </Button>
                    <Button type='default' onClick={() => {this.handleConfirm('info')}}>
                        Info
                    </Button>
                    <Button type='danger' onClick={() => {this.handleConfirm('warning')}}>
                        Warning
                    </Button>
                </Card>
                <Modal
                    title='AntD模态框'
                    visible={this.state.showModal1}
                    // onCancel={this.handleCancel}
                    // onOk={this.handleOk}
                    onCancel={() => {this.handleClose('showModal1')}}
                    onOk={() => {this.handleOpen1('showModal1')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='自定义页脚'
                    visible={this.state.showModal2}
                    okText='好的'
                    cancelText='算了'
                    onCancel={() => {this.handleClose('showModal2')}}
                    onOk={() => {this.handleOpen1('showModal2')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='顶部20px弹框'
                    style={{top: '20px'}}
                    visible={this.state.showModal3}
                    onCancel={() => {this.handleClose('showModal3')}}
                    onOk={() => {this.handleOpen1('showModal3')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='水平居中'
                    wrapClassName='vertical-center-modal'
                    visible={this.state.showModal4}
                    onCancel={() => {this.handleClose('showModal4')}}
                    onOk={() => {this.handleOpen1('showModal4')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
            </div>
        )
    }
}