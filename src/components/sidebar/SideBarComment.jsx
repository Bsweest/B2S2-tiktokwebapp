import { useListVideoStates } from '@/templates/global/ListVideoStates';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMutateComment from 'backend/mutation/CommentMutation';
import { useQueryCommentSection } from 'backend/services/GetComments';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import ListComment from '../comments/ListComment';
import ContentInput from '../content_input';

const variants = {
  open: {
    width: '400px',
  },
  close: {
    width: '0px',
  },
};

const SideBarComment = () => {
  const {
    isOpenComment: isOpen,
    currentElement: { id: fetchID, numComment },
  } = useListVideoStates();

  const ac = new AbortController();

  const {
    data: listComment,
    isSuccess,
    isFetching,
  } = useQueryCommentSection(fetchID, null, ac, isOpen);

  const { mutate, isLoading } = useMutateComment();

  const addComment = (content, ssid, p_id, reply_to) => {
    mutate({ content, ssid, p_id, reply_to });
  };

  useEffect(() => {
    if (!isOpen) ac.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
          flex: 1,
          width: '400px',
          height: '100%',
          borderLeft: '0.5px solid lightgrey',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '45px',
            borderBottom: '1px solid lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Tooltip title="(C) to open/close" placement="bottom">
            <Typography>Comment section ({numComment})</Typography>
          </Tooltip>
        </Box>

        <ListComment list={listComment} />

        <ContentInput sendFn={addComment} />
      </div>
    </motion.div>
  );
};

export default SideBarComment;
