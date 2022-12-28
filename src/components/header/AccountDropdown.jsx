import getFirstLetter from '@/utils/getFirstLetter';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useClientData } from 'backend/services/ProfileServices';
import Link from 'next/link';
import { useState } from 'react';

const AccountDropdown = () => {
  const supabase = useSupabaseClient();
  const [anchor, setAnchor] = useState(null);

  const { data } = useClientData();

  const handleOpenUserMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchor(null);
  };

  const handleClickProfile = () => {
    handleCloseUserMenu();
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={data ? data.avatar_url : null}>
            {data ? getFirstLetter(data.displayname) : null}
          </Avatar>
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
          <Link href={`/${data ? data.id : ''}`}>View profile</Link>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Typography>Log out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountDropdown;
