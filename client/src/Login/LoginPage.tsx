import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'


const LoginPage: React.FC =() => {
  const navigate = useNavigate()

  return (
    <div className='pageContainer login'>
      <LoginForm />
      <div className='createaccount'>
        <p className='pageText'>new here?</p>
        <Button onClick={() => navigate('/createAccount')}>create an account</Button>
      </div>
    </div>
  )
};



export default LoginPage