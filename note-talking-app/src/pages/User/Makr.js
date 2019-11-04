import React from 'react';
import Registered from '../User/registered';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Api from '../../api/index';
import { connect } from 'react-redux';

import { Tabs, PageHeader, Tag, Button, Statistic, Descriptions, Row, Drawer, Form, Icon, Input, Checkbox, Card, message } from 'antd';

const { TabPane } = Tabs;
import './Makr.scss';
const FormItem = Form.Item;
const mapStateToProps = ({ home }) => ({

    selected_state: home.selected,
    incomelist: home.incomelist,
    outcomelist: home.outcomelist

});
const mapDispatchToProps = dispatch => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE_SELECTED', payload });
        },
        dispatch
    }
}
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Makr extends React.Component {

    //登录
    async gologin(userName,userPwd,remember) {
		console.log(remember)
        let user_name = userName;
        let password = userPwd;
        let mdl = remember
        let datas = await Api.post('/user/login', {
            user_name: user_name,
            password: password,
            mdl: mdl
        })
		if(datas.code==1){
			if(datas.data){
				let Authorization=datas.data;
				localStorage.setItem("user", JSON.stringify({user_name,Authorization}));
			}else{
				localStorage.setItem("user", JSON.stringify({user_name}));
			}
			// message.success(`${userName}欢迎您`)
			let { history } = this.props;
			history.push('/make');
			// this.props.dispatch({ type: 'GET_DATA_ASYNC' });
		}else{
			alert("登录失败，请重新输入账号密码")
		}
    }
    // -----------------------------
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

    gores = (key) => {
        let { history } = this.props
        console.log(history)
        if (key == 2) {
            history.push('/makr/res')
        } else if (key == 1) {
            history.push('/makr')
        }

    }
    // -----------------------------
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
				this.gologin(userInfo.userName,userInfo.userPwd,userInfo.remember)
            }
        })
    }
	componentDidMount() {
		 let {update}=this.props;
		 update('/make')
	}
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <div>
                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        onBack={() => window.history.back()}
                        subTitle="账号登陆/注册"
                        

                    >
                        
                    </PageHeader>
                </div>

                <Tabs onChange={this.gores}>

                    <TabPane tab="登录" key="1" >

                        <Form style={{ margin: 50 }}>
                            <FormItem>
                                {
                                    getFieldDecorator('userName', {
                                        initialValue: '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入用账号'
                                            },
                                            {
                                                min: 5, max: 10,
                                                message: '长度不在范围内'
                                            },
                                            {
                                                pattern: new RegExp('^\\w+$', 'g'),
                                                message: '账号名必须为字母或者数字'
                                            }
                                        ]
                                    })(
                                        <Input prefix={<Icon type="user" />} placeholder="请输入用账号" />
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                {
                                    getFieldDecorator('userPwd', {
                                        initialValue: '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入密码'
                                            },
                                        ]
                                    })(
                                        <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                {
                                    getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true
                                    })(
                                        <Checkbox>记住密码</Checkbox>
                                    )
                                }
                                <a href="#" style={{ float: 'right' }}>忘记密码</a>
                            </FormItem>
                            <FormItem>
                                <Input
                                    type="primary"
                                    style={{ background: '#ffdf27' }}
                                    onClick={this.handleSubmit}
                                    type="submit"
                                    // htmltype="submit"
                                    value="登录" />
                            </FormItem>
                        </Form>
                    </TabPane>

                    <TabPane tab="注册" key="2" >
                        <Route path={'/makr/res'} component={Registered} />
                    </TabPane>
                </Tabs>
            </div >
        );
    }
}

export default Form.create()(Makr);



