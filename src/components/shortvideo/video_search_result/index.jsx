import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { supabase } from 'backend/supabase';
import Image from 'mui-image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const VideoSearchResult = ({ data }) => {
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');

  const {
    id,
    created_at,
    op_id,
    uri,
    poster_uri,
    caption,
    music,
    count_views,
  } = data;

  const getUser = async () => {
    const rs = await supabase.from('profiles').select().eq('id', op_id);
    setAvatar(rs.data[0].avatar_url);
    setUsername(rs.data[0].username);
  };

  useEffect(() => {
    getUser();
  });

  return (
    <Link href={`/short/${id}`}>
      <Box sx={{ width: '250px' }}>
        <Box
          sx={{
            width: '250px',
            height: '350px',
            backgroundColor: '#121212',
            marginRight: '10px',
            borderRadius: '10px',
          }}
        >
          <Image
            sx={{ borderRadius: '10px' }}
            src={poster_uri ? poster_uri : '/img/placeholder/poster.svg'}
          />
        </Box>

        <Typography noWrap sx={{ color: '#9f9f9f' }}>
          {caption}
        </Typography>
        <Box className="flex row" sx={{ justifyContent: 'space-between' }}>
          <Box className="flex row" sx={{ alignItems: 'center' }}>
            <Avatar src={avatar} />
            <Typography noWrap sx={{ marginLeft: '10px', width: '150px' }}>
              {username}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PlayArrowRoundedIcon />
            {count_views}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default VideoSearchResult;
