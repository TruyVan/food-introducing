import React from "react";
import { observer } from "mobx-react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.css'

const Login = ()=>{
    return(
        <div className="login-page">
            <Form>
                <Form.Item label="">
                    <Input placeholder="Email/Số điện thoại" prefix={<UserOutlined/>} required/>
                </Form.Item>
                <Form.Item label="">
                    <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>
                <Button>Đăng nhập</Button>
            </Form>
        </div>
    )
}
export default Login;