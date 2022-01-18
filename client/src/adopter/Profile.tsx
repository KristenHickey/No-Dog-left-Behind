import React from 'react';
import './Forms.less';
import { Form, Input } from 'antd';
import 'antd/dist/antd.less';

function Profile() {

  return (
    <div >
      <Form.Item label="First name" name="firstName" >
        <Input placeholder="First name" ></Input>
      </Form.Item>
      <Form.Item label="Last name" name="lastName">
        <Input placeholder="Last name"></Input>
      </Form.Item>
      <Form.Item label="Phone number" name="phone">
        <Input placeholder="Phone number"></Input>
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Email"></Input>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="Password"></Input.Password>
      </Form.Item>
    </div>
  )
}

export default Profile;