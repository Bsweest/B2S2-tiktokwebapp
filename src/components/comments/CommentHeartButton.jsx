import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useMutateHeartComment } from 'backend/mutation/HeartMutate';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../assets/lotties/comment_heart.json';

const CommentHeartButton = ({ services, cmid }) => {
  const { hc: heart, count_heart } = services;
  const lottie = useRef();
  const [segments, setSegments] = useState();
  const isDone = useRef(true);

  const { mutate } = useMutateHeartComment();

  const onComplete = () => {
    isDone.current = true;
  };

  const updateLike = () => {
    if (!isDone.current) return;
    isDone.current = false;
    mutate({ cmid: cmid, bool: !heart });
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
    <Box
      className="flex col"
      sx={{
        width: '50px',
        position: 'relative',
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

      <Typography variant="string">{count_heart}</Typography>

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
  );
};

export default CommentHeartButton;
