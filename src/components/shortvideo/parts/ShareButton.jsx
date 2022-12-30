import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import { ButtonBase, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import styles from './Parts.module.css';

const ShareButton = ({ ssid }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/short/${ssid}`);
  };

  return (
    <div className={styles.container}>
      <ButtonBase onClick={onClick}>
        <ScreenShareRoundedIcon className={styles.icon} sx={{ p: '1px' }} />
      </ButtonBase>
    </div>
  );
};

export default ShareButton;
