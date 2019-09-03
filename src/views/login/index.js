import React from 'react';
import {
        InputItem ,
        Button,
        WhiteSpace,
        Toast
    } from 'antd-mobile';
import { createForm } from 'rc-form';
import request  from '@utils/request';
import './login.scss';

const Login = class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        console.log(this.autoFocusInst);
        // console.dir(this.customRef);
    }
    submit() {
        this.props.form.validateFields(['username', 'password'], (err, values) => {
            if (!err) {
                request({
                    url: 'uc/auth',
                    method: 'post',
                    data: values
                }).then(val => {
                    localStorage.setItem('token', val.token);
                });
            } else {
                Toast.info('请输入账号和密码', 1);
            }
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-container">
                <InputItem
                    {...getFieldProps('username', {
                        rules: [{required: true}]
                    })}
                    clear
                    placeholder="请输入账号"
                    ref={el => this.autoFocusInst = el}>
                    账号
                </InputItem>
                <WhiteSpace/>
                <InputItem
                    {...getFieldProps('password', {
                        rules: [{required: true}]
                    })}
                    type="password"
                    clear
                    placeholder="请输入密码">
                    密码
                </InputItem>
                <WhiteSpace/>
                <Button
                    type = 'primary'
                    onClick={this.submit}>
                    提交
                </Button>
            </div>
        )
    }
};
export default createForm()(Login)