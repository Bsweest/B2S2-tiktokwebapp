import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

import useCommentSection, {
  closeCommentSection,
} from '../../templates/global/CommentSection';

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
      animate={isOpen ? 'open' : 'close'}
      transition={{
        duration: 0.8,
      }}
    >
      <div>
        <Button
          onClick={() => closeCommentSection()}
          sx={{ width: 20, height: 20, backgroundColor: 'red' }}
        />
      </div>
    </motion.div>
  );
};

export default SideBarComment;
