import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    message
} from 'antd';
// const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const FormItem = Form.Item;
class registered extends React.Component {


    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                message.success(`注册成功`)
                console.log('Received values of form: ', values);

            }
        });
    };
    //密码校验
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('您输入的两个密码不一致！');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;


        const { autoCompleteResult } = this.state;

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div>
                <Form onSubmit={this.handleSubmit} style={{ margin: 50 }}>
                    {/* 用户 */}

                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '账号名不能为空'
                                    },
                                    {
                                        min: 5,
                                        message: '账号必须大于5位'
                                    },
                                    {
                                        max: 12,
                                        message: '账号必须小于12位'
                                    },
                                    {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '账号名必须为字母或者数字'
                                    }
                                ]
                            })(
                                <Input prefix={<Icon type="user" />} placeholder="请输入账号" />
                            )
                        }
                    </FormItem>

                    {/* 密码 */}

                    <Form.Item hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入您的密码!',
                                }, {
                                    min: 6,
                                    message: '密码不能小于6位'
                                },
                                {
                                    max: 16,
                                    message: '密码不能大于16位'
                                },
                                {
                                    pattern: new RegExp('^\\w+$', 'g'),
                                    message: '用户名必须为字母或者数字'
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password prefix={<Icon type="lock" />} placeholder="请输入密码" />)}
                    </Form.Item>

                    {/* 确认密码 */}
                    <Form.Item hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认您的密码!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],

                        })(<Input.Password onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" />} placeholder="请确认密码" />)
                        }

                    </Form.Item>



                    <Form.Item
                    //  {...tailFormItemLayout}
                    >
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [
                                {
                                    required: true,
                                    message: '请同意协议'
                                }
                            ]

                        })(
                            <Checkbox>
                                同意 <a href="#">《随手记服务协议》</a>与<a href="#">《隐私政策》</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <FormItem>
                            <Input style={{ background: '#ffdf27' }}
                             type="submit" htmltype="submit" value="注册" />
                        </FormItem>

                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create()(registered);
