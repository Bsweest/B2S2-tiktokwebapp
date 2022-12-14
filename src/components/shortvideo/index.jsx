import { changeCurrentElement } from '@/templates/global/ListVideoStates';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import useQueryUserData from 'backend/services/ProfileServices';
import useQueryShortServives from 'backend/services/ShortService';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Description from './parts/Description';
import Interaction from './parts/Interaction';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ShortVideo = ({ data, isHome }) => {
  const { id: ssid, created_at, op_id, uri, caption, music } = data;
  const [status, setStatus] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  const { data: services, isSuccess: cd1 } = useQueryShortServives(ssid);
  const { data: opData, isSuccess: cd2 } = useQueryUserData(op_id);

  useEffect(() => {
    if (inView) {
      changeCurrentElement(ssid, op_id, services.count_comment);
      setStatus(true);
    } else {
      setStatus(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

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
      {cd1 && cd2 ? (
        <>
          <Box
            className="flex row"
            sx={{
              height: '100%',
              width: '100%',
              zIndex: 10,
              alignItems: 'flex-end',
              justifyContent: isHome ? 'center' : 'space-between',
              gap: '2rem',
            }}
          >
            {isHome ? (
              <Description data={{ opData, caption, music }} />
            ) : (
              <div></div>
            )}

            <ButtonBase
              ref={ref}
              sx={{
                width: 'calc(100vh / 2)',
                height: '97%',
                mb: '1%',
                backgroundColor: 'black',
                borderRadius: '14px',
                overflow: 'hidden',
                zIndex: 10,
              }}
            >
              <ReactPlayer
                url={uri}
                loop={true}
                playing={status}
                width="100%"
                height="100%"
                onPlay={() => setStatus(true)}
                onPause={() => setStatus(false)}
                controls
              />
            </ButtonBase>

            <Interaction
              isHome={isHome}
              opData={opData}
              data={services}
              ssid={ssid}
            />
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
              backgroundImage: isHome
                ? ''
                : "url('https://i.picsum.photos/id/43/600/600.jpg?hmac=HTh9geN5CxVyIKRwno4I4OxtBpnNOuOJgvUdlYXQLcA')",
            }}
          />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ShortVideo;
