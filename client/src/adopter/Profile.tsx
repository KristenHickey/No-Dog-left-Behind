import React from 'react';
import './Forms.css';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';

function Profile() {

  return (
    <div >
      <Form.Item name="firstName" >
        <Input placeholder="First name" ></Input>
      </Form.Item>
      <Form.Item name="lastName">
        <Input placeholder="Last name"></Input>
      </Form.Item>
      <Form.Item name="phone">
        <Input placeholder="Phone number"></Input>
      </Form.Item>
      <Form.Item name="email">
        <Input placeholder="Email"></Input>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="Password"></Input.Password>
      </Form.Item>
    </div>
  )
}

export default Profile;