import React from 'react';
import './Forms.less';
import { Form, Input } from 'antd';
import 'antd/dist/antd.less';

const Profile: React.FC = ()=> {

  return (
    <>
      <Form.Item label="First name" name="firstName">
        <Input placeholder="First name" />
      </Form.Item>
      <Form.Item label="Last name" name="lastName">
        <Input placeholder="Last name" />
      </Form.Item>
      <Form.Item label="Phone number" name="phone">
        <Input placeholder="Phone number" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="Password" />
      </Form.Item>
    </>
  )
}

export default Profile;