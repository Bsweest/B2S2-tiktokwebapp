/* eslint-disable import/order */
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import FlatList from 'flatlist-react';
import { useState } from 'react';

import Comment from '.';
import {
  useQueryCommentSection,
  useQueryCountChildComment,
} from '../../../backend/services/GetComments';

const ParentComment = ({ data }) => {
  const pid = data.id;

  const [isOpen, setIsOpen] = useState(false);
  const ac = new AbortController();

  const { data: cnt } = useQueryCountChildComment(pid);
  const {
    data: listChildrenComment,
    isSuccess,
    isFetching,
  } = useQueryCommentSection(null, pid, ac, isOpen);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const renderItem = (item) => {
    return <Comment key={item.id} isParent={false} data={item} />;
  };

  return (
    <Box className="flex col" sx={{ mb: '2px' }}>
      <Comment isParent={true} data={data} />

      <Box
        sx={{
          ml: '50px',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
        }}
      >
        <FlatList list={listChildrenComment} renderItem={renderItem} />
      </Box>

      {cnt && (
        <ButtonBase onClick={onClick}>
          <Typography variant="subtitle2" fontWeight="bold" component="h6">
            {isOpen ? 'Hide replies' : `View more replies(${cnt})`}
          </Typography>
        </ButtonBase>
      )}
    </Box>
  );
};

export default ParentComment;
