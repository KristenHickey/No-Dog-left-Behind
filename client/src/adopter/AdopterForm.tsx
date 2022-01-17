import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './Forms.css';
import { Form, Button } from 'antd';
import 'antd/dist/antd.css';
import Profile from './Profile';
import Preferences from './Preferences';
import APIservice from '../APIservice';
import { UserContext } from '../Context/UserProvider'
import { FlashOff } from '@material-ui/icons';


function AdopterForm() {
  const { login } = useContext(UserContext)
  const navigate = useNavigate();

  const onFinish = (e: React.FormEvent<HTMLInputElement>): void => {
    APIservice.post('createAdopter', e)
      .then(data => login(data.id))
    navigate('/home')
  }

  return (
    <div className="pageContainer">
      <div className="formContainer">
        <Form onFinish={onFinish} style={{ color: "red" }}>
          <Profile />
          <Preferences />
          <div className='loginbutton'>
            <Form.Item  >
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div >
  )
}

export default AdopterForm;