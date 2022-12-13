import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../assets/lotties/comment_heart.json';

const Comment = ({ isParent }) => {
  const lottie = useRef();
  const [heart, setHeart] = useState(false);
  const [segments, setSegments] = useState();
  const isDone = useRef(true);

  const onComplete = () => {
    isDone.current = true;
  };

  const updateLike = () => {
    if (!isDone.current) return;
    isDone.current = false;
    setHeart((prev) => !prev);
  };

  useEffect(() => {
    if (heart) {
      isDone.current = false;
      setSegments([40, 80]);
    } else {
      isDone.current = false;
      setSegments([5, 0]);
    }
  }, [heart]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mb: '10px' }}>
      <Avatar
        alt="avatar"
        sx={{ width: isParent ? 38 : 30, height: isParent ? 38 : 30 }}
      />
      <Box
        sx={{ display: 'flex', flex: 1, flexDirection: 'column', ml: '7px' }}
      >
        <Typography
          variant="string"
          color="initial"
          fontSize="1.1rem"
          fontWeight="bold"
        >
          User
        </Typography>
        <Typography variant="string" color="initial">
          content
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            mt: '2px',
            mb: '5px',
          }}
        >
          <Typography variant="string" color="#898989">
            3d ago
          </Typography>
          <ButtonBase>
            <Typography variant="string" color="#898989">
              Reply
            </Typography>
          </ButtonBase>
        </Box>
      </Box>

      <Box
        sx={{
          width: '50px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: '10px',
        }}
      >
        <Box sx={{ width: '32px', height: '32px', mb: '2px' }}>
          <Lottie
            ref={lottie}
            style={{
              width: '64px',
              height: '64px',
              overflow: 'visible',
              transform: 'translate(-25%, -25%)',
            }}
            play
            animationData={animationData}
            loop={false}
            segments={segments}
            onComplete={onComplete}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </Box>

        <Typography variant="string" color="initial">
          0
        </Typography>

        <ButtonBase
          sx={{
            position: 'absolute',
            top: 10,
            width: '32px',
            height: '32px',
          }}
          onClick={updateLike}
          disableRipple
          disableTouchRipple
        />
      </Box>
    </Box>
  );
};

export default Comment;
