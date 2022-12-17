import Box from '@mui/material/Box';
import React from 'react';

import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import VideoAvatar from './VideoAvatar';

const Interaction = ({ isHome }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        pointerEvents: 'auto',
        pb: isHome ? '' : '25vh',
      }}
    >
      {isHome && <VideoAvatar />}
      <HeartButton />
      <CommentButton isHome={isHome} />
      <BookmarkButton />
    </Box>
  );
};

export default Interaction;
