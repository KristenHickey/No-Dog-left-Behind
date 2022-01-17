import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import APIservice from '../APIservice';

function LoginForm() {

  const onFinish = (e: React.FormEvent<HTMLInputElement>): void => {
    APIservice.login(e)
      .then(data => {
        if (data.status === 'success') {

        } else {

        }
      })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>

  );

}

export default LoginForm