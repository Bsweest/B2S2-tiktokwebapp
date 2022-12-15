import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Description from './parts/Description';
import Interaction from './parts/Interaction';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ShortVideo = ({ currentElement, item }) => {
  const [status, setStatus] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  const onVideoClick = () => {
    setStatus((prev) => !prev);
  };

  useEffect(() => {
    if (inView) {
      currentElement.set(item);
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [currentElement, inView, item]);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        height: 'calc(100vh - 60px)',
        borderBottom: '1px solid lightgray',
        display: 'flex',
        scrollSnapAlign: 'start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          zIndex: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ButtonBase
          sx={{
            width: 'calc(100vh / 2)',
            height: '98%',
            backgroundColor: 'black',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
          onClick={onVideoClick}
        >
          <ReactPlayer
            url={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            loop={true}
            playing={status}
            width="100%"
            height="100%"
          />
        </ButtonBase>
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
          height: '95%',
          width: '100%',
          pointerEvents: 'none',
          px: '2rem',
          zIndex: 15,
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
