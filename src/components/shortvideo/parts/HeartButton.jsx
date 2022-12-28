import { CheckAuth } from '@/templates/global/CheckAuth';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useMutateHeartShort } from 'backend/mutation/HeartMutate';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../../assets/lotties/heart_animation.json';
import styles from './Parts.module.css';

const HeartButton = ({ isHeart, count, ssid }) => {
  const lottie = useRef(null);
  const [segments, setSegments] = useState([0, 0]);
  const isDone = useRef(true);

  const { mutate } = useMutateHeartShort();

  const onComplete = () => {
    isDone.current = true;
  };

  const updateLike = () => {
    if (!CheckAuth()) return;

    if (!isDone.current) return;
    isDone.current = false;
    mutate({ ssid: ssid, bool: !isHeart });
  };

  useEffect(() => {
    if (isHeart) {
      isDone.current = false;
      setSegments([0, 25]);
    } else {
      isDone.current = false;
      setSegments([7, 0]);
    }
  }, [isHeart]);

  return (
    <Box className={styles.container}>
      <Box className={styles.icon}>
        <Lottie
          ref={lottie}
          play
          animationData={animationData}
          style={{
            width: '100px',
            height: '100px',
            overflow: 'visible',
            transform: 'translate(-25%, -25%)',
          }}
          loop={false}
          segments={segments}
          onComplete={onComplete}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </Box>

      <Tooltip title="(H) heart">
        <ButtonBase
          className={styles.pressable}
          onClick={updateLike}
          disableRipple
          disableTouchRipple
        />
      </Tooltip>

      <Typography className={styles.count} sx={{ mt: '-5px' }}>
        {count}
      </Typography>
    </Box>
  );
};

export default HeartButton;
