import React from 'react';

let Style = {
    container: { width: '100%', height: 85, background: ' rgb(250, 247, 247)', },
    containey: { width: '100%', height: 50, background: ' rgb(250, 247, 247)' },
    containet: { width: '100%', height: 50, border: '1px solid rgb(235, 237, 240)', background: ' rgb(250, 247, 247)' }
}
import { PageHeader, Avatar, Icon, Row, Col, Drawer, Button, Form, Input } from 'antd';

import './User/Makr.scss';

const FormItem = Form.Item;

class Make extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
                    subTitle="个人中心"
                ></PageHeader>



                <div style={Style.container}  >
                    <Row type="primary" onClick={this.showDrawer}>
                        <Col className='uytasdsa' span={5}>
                            <Avatar style={{ marginTop: 15 }} size={54} icon="user" />
                        </Col>
                        <Col span={17}>
                            <div className='ytasdw' >
                                <span className='ytaswwdw' >2131223123</span><span> <Icon type="sketch-circle" theme="filled" /></span>
                                <p>2131223123</p>
                            </div>
                        </Col>
                        <Col className="rrewq" span={1}>></Col>

                    </Row>
                    <div>
                        <Drawer
                            title="我的资料"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <div className='kausdyas'>
                                <div>
                                    <Row>
                                        <Col span={15}>头像</Col>
                                        <Col span={7}> <Avatar size={44} icon="user" /></Col>
                                    </Row>
                                    <Row>
                                        <Col span={14}>昵称</Col>
                                        <Col span={9}>12345678901</Col>
                                        <Col span={1}>></Col>
                                    </Row>
                                    <Row>
                                        <Col span={14}>手机号</Col>
                                        <Col span={9}>1234567891</Col>
                                        <Col span={1}>></Col>
                                    </Row>
                                    <Row>
                                        <Col span={17}>账号绑定</Col>
                                        <Col span={6}>
                                            <Icon type="twitter" />
                                            <Icon type="weibo-circle" />
                                            <Icon type="qq" />
                                            <Icon type="wechat" />
                                        </Col>
                                        <Col span={1}>></Col>
                                    </Row>
                                    <FormItem>
                                        <Input style={{ background: ' rgb(255, 80, 27)' }}
                                            type="submit" value="退出登录" />
                                    </FormItem>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                </div>


                <div style={{ marginTop: 20 }} className="rtewq">
                    <div style={Style.containet}>
                        <Row>
                            <Col span={14} style={{ color: 'rgb(255, 212, 19)' }} >
                                随享会员
                                <Icon type="crown" theme="filled" /></Col>
                            <Col className='rtewe' style={{ color: 'rgb(255, 212, 19)' }} span={8}>开通即享尊贵特权</Col>
                            <Col span={1}>></Col>
                        </Row>
                    </div>
                    <div style={Style.containey}>
                        <Row>
                            <Col span={17}>积分</Col>
                            <Col className='rtewe' span={5}>积分<span style={{ color: 'rgb(255, 212, 19)' }} >409</span></Col>
                            <Col span={1}>></Col>
                        </Row>
                    </div>
                </div>
                <div style={{ marginTop: 20 }} className="rtewq">
                    <div style={Style.containet}>
                        <Row>
                            <Col span={22}>关注动态</Col>
                            <Col span={1}>></Col>
                        </Row>
                    </div>
                    <div style={Style.containet}>
                        <Row>
                            <Col span={22}>我的收藏</Col>
                            <Col span={1}>></Col>
                        </Row>
                    </div>
                    <div style={Style.containey} >
                        <Row >
                            <Col span={22}>我的帖子</Col>
                            <Col span={1}>></Col>
                        </Row>
                    </div>
                </div>

            </div >
        )
    }
}
export default Make;

