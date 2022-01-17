import React, { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import './Decorational.less';



function Banner() {
  const { userId } = useContext(UserContext);

  return (
    <div id="banner">
      < span > No Dog Left Behind</span >
    </div >
  )
}

export default Banner;