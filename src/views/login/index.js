import React from 'react';
import {
        InputItem ,
        Button,
        WhiteSpace,
        Toast
    } from 'antd-mobile';
import { createForm } from 'rc-form';
import { createHashHistory } from 'history';
import request  from '@utils/request';
import './login.scss';
import logo from '@assets/login/logo.png';
import lg from '@assets/login/lg.png';

const history = createHashHistory();
const Login = class Login extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.submit = this.submit.bind(this);
        this.focusTimer = null;
        this.blurTimer = null;
        this.logoBottom = React.createRef();
        this.loginBox = React.createRef();
    }
    focus() {
        if (this.focusTimer) {
           clearTimeout(this.focusTimer)
        }
        if (this.blurTimer) {
            clearTimeout(this.blurTimer)
        }
        this.focusTimer = setTimeout(() => {
            console.log(this.logoBottom)
            this.logoBottom.current.style.display = 'none';
            this.loginBox.current.style.top = '1rem';
        }, 300)
    }
    blur() {
        if (this.focusTimer) {
            clearTimeout(this.focusTimer)
        }
        if (this.blurTimer) {
            clearTimeout(this.blurTimer)
        }
        this.blurTimer = setTimeout(() => {
            console.log(this.logoBottom)
            this.logoBottom.current.style.display = 'inline-block';
            this.loginBox.current.style.top = '20%';
        }, 300)
    }
    componentWillUnmount() {
        if (this.focusTimer) {
            clearTimeout(this.focusTimer)
        }
        if (this.blurTimer) {
            clearTimeout(this.blurTimer)
        }
    }
    submit() {
        history.push('/home');
        // this.props.form.validateFields(['username', 'password'], (err, values) => {
        //     if (!err) {
        //         values.username = values.username === 'admin' ? values.username : values.username.toUpperCase();
        //         request({
        //             url: 'uc/auth',
        //             method: 'post',
        //             data: values
        //         }).then(val => {
        //             localStorage.setItem('token', val.token);
        //             history.push('/home');
        //         });
        //     } else {
        //         Toast.info('请输入账号和密码', 1);
        //     }
        // });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-container">
                <div className="login-box" ref={this.loginBox}>
                    <img src={lg} className="lg" alt="澳美制药"/>
                    <InputItem
                        {...getFieldProps('username', {
                            rules: [{required: true}]
                        })}
                        clear
                        placeholder="请输入账号"
                        onFocus = {this.focus}
                        onBlur = {this.blur}>
                        账号
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        {...getFieldProps('password', {
                            rules: [{required: true}]
                        })}
                        type="password"
                        clear
                        placeholder="请输入密码"
                        onFocus = {this.focus}
                        onBlur = {this.blur}>
                        密码
                    </InputItem>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button
                        type = 'primary'
                        onClick={this.submit}>
                        提交
                    </Button>
                </div>
                <div id="logo-bottom" ref={this.logoBottom}>
                    <img src={logo} className="logo" alt="努力让医药行业更智能"/>
                    <p className="logo-copyright">Copyright&copy;2019深圳万威科技有限公司版权所有</p>
                </div>
            </div>
        )
    }
};
export default createForm()(Login)