import React from 'react';
import './Forms.css';
import Banner from '../Decorational/Banner';
import { Link } from "react-router-dom"
import { Form, Radio, Select, Button } from 'antd';
import { breeds } from '../dogBreeds';
import 'antd/dist/antd.css';
import Profile from './Profile';
import Preferences from './Preferences';
import APIservice from '../APIservice';

let adopterID;

const breedOptions: JSX.Element[] = [];
for (let i = 0; i < breeds.length; i++) {
  breedOptions.push(<Select.Option key={breeds[i]}>{breeds[i]}</Select.Option>);
}
const onFinish = (e: React.FormEvent<HTMLInputElement>): void => {
  APIservice.post('createAdopter', e)
    .then(data => adopterID = data.id)
}

function AdopterForm() {

  return (
    <div >
      <Banner></Banner>
      <div className="formContainer">
        <Form onFinish={onFinish}>
          <Profile />
          <Preferences />

          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    </div >
  )
}

export default AdopterForm;