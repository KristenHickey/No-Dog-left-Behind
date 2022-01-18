import React, { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import './Decorational.less';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const { userId, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div id="banner">
      {(window.location.pathname === '/createAccount' || window.location.pathname.includes('dog')) ?
        <div className="back">
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </div> :
        null}
      <span> No Dog Left Behind</span>
      {userId !== null ?
        <div id="logout">
          <LogoutRoundedIcon onClick={logout} />
        </div>
        :
        null}
    </div >
  )
}

export default Banner;