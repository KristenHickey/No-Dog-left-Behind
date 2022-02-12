import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd';
import APIservice from '../APIservice';
import { UserContext } from '../Context/UserProvider';
import { useNavigate } from 'react-router-dom';
import './login.less'
import { IUserContext } from '../interfaces';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

const LoginForm:React.FC = () => {
  const { login } = useContext<IUserContext>(UserContext)
  const navigate = useNavigate();

  const onFinish = (e: React.FormEvent<HTMLInputElement>): void => {
    APIservice.login(e)
      .then(data => {
        if (data.status === 'success' && data.id)  {
          login(data.id)
          navigate('/home')
        }
      })
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<React.FormEvent<HTMLInputElement>>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className='loginform'>

        <Form.Item
          label="First name"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
      </div>
      <div className='loginbutton'>
        <Form.Item >
          <Button type="primary" htmlType="submit" >
            login
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default LoginForm