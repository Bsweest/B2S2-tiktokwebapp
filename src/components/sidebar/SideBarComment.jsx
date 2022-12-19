import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { useQueryCommentSection } from '../../../backend/services/GetComments';
import { useListVideoStates } from '../../templates/global/ListVideoStates';
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
  const { isOpenComment: isOpen, currentElement: fetchID } =
    useListVideoStates();

  const ac = new AbortController();

  const { data, isSuccess, isFetching } = useQueryCommentSection(
    fetchID,
    null,
    ac,
    isOpen,
  );

  useEffect(() => {
    ac.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          height: '100vh',
          borderLeft: '0.5px solid lightgrey',
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

        <ListComment data={data} />
      </div>
    </motion.div>
  );
};

export default SideBarComment;
