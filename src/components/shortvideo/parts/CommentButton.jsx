import Comment from '@mui/icons-material/Comment';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { toggleCommentSection } from '../../../templates/global/ListVideoStates';
import styles from './Parts.module.css';

const CommentButton = ({ ssid, count }) => {
  const onClick = () => {
    toggleCommentSection(ssid);
  };

  return (
    <div className={styles.container}>
      <Tooltip title="(C) comment">
        <ButtonBase onClick={onClick}>
          <Comment className={styles.icon} sx={{ p: '1px' }} />
        </ButtonBase>
      </Tooltip>
      <Typography className={styles.count} sx={{ mt: '-7px' }}>
        {count}
      </Typography>
    </div>
  );
};

export default CommentButton;
