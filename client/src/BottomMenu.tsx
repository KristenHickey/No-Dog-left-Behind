import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserProvider';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Paper } from '@mui/material';

function BottomMenu() {
  //const { userId } = useContext(UserContext);
  const userId = '61e2f1aef7d13b4900fc7857';
  const [value, setValue] = useState(1);

  return (
    <Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Favourites" icon={<FavoriteIcon />} component={Link} to={`/favourites`} />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to={'/home'} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to={`/profile/${userId}`} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BottomMenu
