import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserProvider';

function BottomMenu() {
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/profile/${userId}`)}></button>
    </div>
  )
}

export default BottomMenu
