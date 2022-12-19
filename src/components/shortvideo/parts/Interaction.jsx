import Box from '@mui/material/Box';
import React from 'react';

import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import VideoAvatar from './VideoAvatar';

const Interaction = ({ isHome, data, ssid }) => {
  const { bm, hs, count_heart, count_comment } = data;

  return (
    <Box
      className="flex col"
      sx={{
        color: 'white',
        alignItems: 'center',
        pointerEvents: 'auto',
        mb: isHome ? '15vh' : '30vh',
        transform: isHome ? '' : 'translateX(-20px)',
        zIndex: 15,
      }}
    >
      {isHome && <VideoAvatar />}
      <HeartButton isHeart={hs} count={count_heart} />
      <CommentButton isHome={isHome} count={count_comment} ssid={ssid} />
      <BookmarkButton isBM={bm} />
    </Box>
  );
};

export default Interaction;
