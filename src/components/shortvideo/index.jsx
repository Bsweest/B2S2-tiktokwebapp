import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import Description from './parts/Description';
import Interaction from './parts/Interaction';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ShortVideo = () => {
  const [status, setStatus] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 'calc(100vh - 64px)',
        borderBottom: '1px solid lightgray',
        display: 'flex',
        scrollSnapAlign: 'start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          zIndex: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 'calc(100vh / 2)',
            height: '98%',
          }}
        >
          <ReactPlayer
            style={{ borderRadius: '14px', overflow: 'hidden' }}
            url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
            playing={status}
            width="100%"
            height="100%"
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5,
          width: '100%',
          height: '100%',
          filter: 'blur(10px)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage:
            "url('https://i.picsum.photos/id/825/200/300.jpg?hmac=02AaqBOvx8gwrGt7a3HWzJHnZXrMzYoXbAYwjJWH40E')",
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          top: 0,
          left: 0,
          zIndex: 15,
          width: '100%',
          height: '95%',
          pb: '10px',
          px: '30px',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <Description />
        <Interaction />
      </Box>
    </Box>
  );
};

export default ShortVideo;
