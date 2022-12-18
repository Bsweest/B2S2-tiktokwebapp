import Box from '@mui/material/Box';
import React from 'react';

import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import VideoAvatar from './VideoAvatar';

const Interaction = ({ isHome }) => {
  return (
    <Box
      className="flex col"
      sx={{
        color: 'white',
        alignItems: 'center',
        pointerEvents: 'auto',
        mb: isHome ? '15vh' : '30vh',
        transform: isHome ? '' : 'translateX(-20px)',
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
