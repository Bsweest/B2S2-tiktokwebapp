import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Description from './parts/Description';
import Interaction from './parts/Interaction';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ShortVideo = ({ currentElement, item, isHome }) => {
  const [status, setStatus] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  const onVideoClick = () => {
    setStatus((prev) => !prev);
  };

  useEffect(() => {
    if (inView) {
      if (currentElement) currentElement.set(item);
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [currentElement, inView, item]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: isHome ? 'calc(100vh - 60px)' : '100vh',
        borderBottom: isHome ? '1px solid lightgray' : '',
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
          ref={ref}
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
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
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
          filter: 'brightness(30%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundImage:
            "url('https://i.picsum.photos/id/43/600/600.jpg?hmac=HTh9geN5CxVyIKRwno4I4OxtBpnNOuOJgvUdlYXQLcA')",
        }}
      />

      <Box
        className="flex row"
        sx={{
          position: 'absolute',
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
        {isHome ? <Description /> : <Box></Box>}
        <Interaction isHome={isHome} />
      </Box>
    </Box>
  );
};

export default ShortVideo;
