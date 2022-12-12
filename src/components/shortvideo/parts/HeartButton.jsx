import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../../assets/lotties/heart_animation.json';
import styles from './Parts.module.css';

const HeartButton = ({ count_heart = 0 }) => {
  const lottie = useRef(null);
  const [heart, setHeart] = useState(false);
  const [segments, setSegments] = useState([0, 0]);
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
      setSegments([0, 25]);
    } else {
      isDone.current = false;
      setSegments([7, 0]);
    }
  }, [heart]);

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

      <ButtonBase
        className={styles.pressable}
        onClick={updateLike}
        disableRipple
        disableTouchRipple
      />

      <Typography className={styles.count} sx={{ mt: '-5px' }}>
        {count_heart}
      </Typography>
    </Box>
  );
};

export default HeartButton;
