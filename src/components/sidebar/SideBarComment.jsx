import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import useCommentSection from '../../templates/global/CommentSection';
import ListComment from '../comments/ListComment';

const variants = {
  open: {
    width: '400px',
  },
  close: {
    width: '0px',
  },
};

const SideBarComment = () => {
  const { isOpen, fetchID } = useCommentSection();

  return (
    <motion.div
      variants={variants}
      initial="close"
      style={{ overflow: 'hidden' }}
      animate={isOpen ? 'open' : 'close'}
      transition={{
        duration: 0.6,
      }}
    >
      <div
        className="flex col"
        style={{
          width: '400px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            height: '45px',
            borderBottom: '1px solid lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Tooltip title="(C) to open/close" placement="bottom">
            <Typography>Comment section (0)</Typography>
          </Tooltip>
        </Box>

        <ListComment />
      </div>
    </motion.div>
  );
};

export default SideBarComment;
