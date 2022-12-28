import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoSearchResult = () => {
  return (
    <Box sx={{ width: '250px' }}>
      <ReactPlayer
        url={
          'https://utpupcffsaillsgoohtt.supabase.co/storage/v1/object/public/shareshorts/fea846ff-f91d-4aa0-b492-53773161bab7.mp4'
        }
        playing={true}
        width="250px"
        height="350px"
        controls
        style={{
          backgroundColor: '#cfcfcf',
          marginRight: '10px',
          borderRadius: '10px',
        }}
      />
      <Typography noWrap sx={{ color: '#9f9f9f' }}>
        Dari pagi aku tahan nangis tapi pas lihat ini kok
      </Typography>
      <Box className="flex row" sx={{ justifyContent: 'space-between' }}>
        <Box className="flex row" sx={{ alignItems: 'center' }}>
          <Avatar src="https://randomuser.me/api/portraits/women/82.jpg" />
          <Typography noWrap sx={{ marginLeft: '10px', width: '150px' }}>
            lethithanhthuong0905
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlayArrowRoundedIcon />
          2M
        </Box>
      </Box>
    </Box>
  );
};

export default VideoSearchResult;
