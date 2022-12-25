import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { supabase } from 'backend/supabase';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';

const AccountDropdown = () => {
  const userId = window.localStorage.getItem('userId');
  const [avatar, setAvatar] = useState('');
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    getUserAvatar();
  });

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
    window.location.replace('/');
    handleCloseUserMenu();
  };

  async function getUserAvatar() {
    const id = window.localStorage.getItem('userId');
    const result = await supabase
      .from('profiles')
      .select('avatar_url')
      .eq('id', id);
    setAvatar(result.data[0].avatar_url);
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={avatar} />
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
