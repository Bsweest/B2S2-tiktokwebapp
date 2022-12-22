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
import React, { useState } from 'react';

const AccountDropdown = () => {
  const userId = window.localStorage.getItem('userId');
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickProfile = () => {
    handleCloseUserMenu();
  };
  const logOut = () => {
    window.localStorage.clear();
    location.reload();
    handleCloseUserMenu();
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="https://randomuser.me/api/portraits/men/17.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleClickProfile}>
          <Link href={`/account/${userId}`} textAlign="center">
            View profile
          </Link>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Typography textAlign="center">Log out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountDropdown;
