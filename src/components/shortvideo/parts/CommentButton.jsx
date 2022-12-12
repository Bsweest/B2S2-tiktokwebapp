import Comment from '@mui/icons-material/Comment';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import { openCommentSection } from '../../../templates/global/CommentSection';
import styles from './Parts.module.css';

const CommentButton = ({ numCM = 0 }) => {
  const onClick = () => {
    openCommentSection();
  };

  return (
    <div className={styles.container}>
      <ButtonBase onClick={onClick}>
        <Comment className={styles.icon} sx={{ p: '1px' }} />
      </ButtonBase>
      <Typography className={styles.count} sx={{ mt: '-7px' }}>
        {numCM}
      </Typography>
    </div>
  );
};

export default CommentButton;
