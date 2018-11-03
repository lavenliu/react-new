import React from 'react';
import { Card, Icon, Tabs, message } from 'antd';

import './ui.less'

const TabPane = Tabs.TabPane


export default class MyTabs extends React.Component {

    newTabIndex = 0

    callBack = (key) => {
        message.info('You select tab: ' + key)
    }

    componentWillMount() {
        const panes = [
            {
                title: 'Dynamic 1',
                key: '1',
                content: 'This is dynamic 1'
            },
            {
                title: 'Dynamic 2',
                key: '2',
                content: 'This is dynamic 2'
            },
            {
                title: 'Dynamic 3',
                key: '3',
                content: 'This is dynamic 3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <div>
                <Card title='Tab 标签页' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.callBack}>
                        <TabPane tab='Tab 1' key='1'>
                            This is tabpane 1
                        </TabPane>
                        <TabPane tab='Tab 2' key='2'>
                            This is tabpane 2
                        </TabPane>
                        <TabPane tab='Tab 3' key='3'>
                            This is tabpane 3
                        </TabPane>
                        {/* disable a pane */}
                        <TabPane tab='Tab 4' key='4' disabled>
                            This is tabpane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab 标签页（带图标）' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.callBack}>
                        {/* tab must be an element, we need use span to wrap */}
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key='1'>
                            This is tabpane 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="bar-chart" />Tab 1</span>} key='2'>
                            This is tabpane 2
                        </TabPane>
                        <TabPane tab={<span><Icon type="heart" />Tab 1</span>} key='3'>
                            This is tabpane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab 标签页（动态）' className='card-wrap'>
                    <Tabs 
                        // defaultActiveKey='1'
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type='editable-card'
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((pane) => {
                                return <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}