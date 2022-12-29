import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { supabase } from 'backend/supabase';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';

const AccountSearchResult = ({ data }) => {
  const { id, username, displayname, avatar_url, bio } = data;
  const [follow, setFollow] = useState(0);

  async function getFollow() {
    const rs = await supabase.from('_follow').select().eq('following_id', id);
    setFollow(rs.data.length);
  }

  useEffect(() => {
    getFollow();
  }, []);

  return (
    <Link href={`/${id}`}>
      <ListItemButton
        sx={{ height: '120px', borderBottom: '1px solid #2e2e2e' }}
      >
        <ListItemIcon>
          <Avatar src={avatar_url} sx={{ width: '75px', height: '75px' }} />
        </ListItemIcon>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '25px' }}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
            {username}
          </Typography>
          <Box className="flex row" sx={{ gap: '10px' }}>
            <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
              {displayname}
            </Typography>
            <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
              {follow}
            </Typography>
            <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
              Followers
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
            {bio}
          </Typography>
        </Box>
      </ListItemButton>
    </Link>
  );
};

export default AccountSearchResult;
