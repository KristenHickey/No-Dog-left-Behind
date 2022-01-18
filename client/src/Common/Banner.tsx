import React, { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import './Decorational.less';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


function Banner() {
  const { userId, logout } = useContext(UserContext);

  return (
    <div id="banner">
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