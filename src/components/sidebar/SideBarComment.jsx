import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import useCommentSection from '../../templates/global/CommentSection';
import ParentComment from '../comments/ParentComment';

const variants = {
  open: {
    width: '350px',
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
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
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

        <List sx={{ display: 'flex', flexDirection: 'column', px: '5px' }}>
          {[1, 2].map((item, index) => (
            <ParentComment key={index} />
          ))}
        </List>
      </div>
    </motion.div>
  );
};

export default SideBarComment;
