import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './Forms.css';
import Banner from '../Decorational/Banner';
import { Form, Button } from 'antd';
import 'antd/dist/antd.css';
import Profile from './Profile';
import Preferences from './Preferences';
import APIservice from '../APIservice';
import { UserContext } from '../Context/UserProvider'


function AdopterForm() {
  const { login } = useContext(UserContext)
  const navigate = useNavigate();

  const onFinish = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(`e`, e)
    APIservice.post('createAdopter', e)
      .then(data => login(data.id))
    navigate('/dogs')
  }

  return (
    <div className="pageContainer">
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