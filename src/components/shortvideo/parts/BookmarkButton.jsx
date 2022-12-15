import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../../assets/lotties/bookmark_animation.json';
import styles from './Parts.module.css';

const BookmarkButton = () => {
  const lottie = useRef(null);
  const isDone = useRef(false);
  const [isBM, setIsBM] = useState(false);
  const [segments, setSegments] = useState([0, 0]);

  const onComplete = () => {
    isDone.current = true;
  };
  const updateBM = () => {
    if (!isDone.current) return;
    isDone.current = false;
    setIsBM((prev) => !prev);
  };

  useEffect(() => {
    if (isBM) {
      isDone.current = false;
      setSegments([0, 90]);
    } else {
      isDone.current = false;
      setSegments([90, 155]);
    }
  }, [isBM]);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Lottie
          ref={lottie}
          play
          animationData={animationData}
          style={{
            width: '60px',
            height: '60px',
            overflow: 'visible',
            transform: 'translate(-10%, -15%)',
          }}
          loop={false}
          segments={segments}
          onComplete={onComplete}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>

      <Tooltip title="(B) bookmark">
        <ButtonBase
          className={styles.pressable}
          onClick={updateBM}
          disableRipple
          disableTouchRipple
        />
      </Tooltip>
    </div>
  );
};

export default BookmarkButton;
