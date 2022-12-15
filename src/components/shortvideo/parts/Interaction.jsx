import Box from '@mui/material/Box';
import React from 'react';

import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import VideoAvatar from './VideoAvatar';

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
      <VideoAvatar />
      <HeartButton />
      <CommentButton />
      <BookmarkButton />
    </Box>
  );
};

export default Interaction;
