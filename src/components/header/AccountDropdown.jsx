import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const AccountDropdown = () => {
  const userId = window.localStorage.getItem('userId');
  const [anchor, setAnchor] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchor(null);
  };

  const handleClickProfile = () => {
    handleCloseUserMenu();
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.replace('/');
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={null} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchor)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleClickProfile}>
          <Link href={`/account/${userId}`}>View profile</Link>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Typography>Log out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountDropdown;
