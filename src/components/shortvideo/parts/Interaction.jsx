import Box from '@mui/material/Box';
import React from 'react';

import Avatar from './Avatar';
import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';

const Interaction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        pointerEvents: 'auto',
      }}
    >
      <Avatar />
      <HeartButton />
      <CommentButton />
      <BookmarkButton />
    </Box>
  );
};

export default Interaction;
