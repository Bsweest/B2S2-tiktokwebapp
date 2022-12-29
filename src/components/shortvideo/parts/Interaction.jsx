import Box from '@mui/material/Box';
import React from 'react';

import BookmarkButton from './BookmarkButton';
import CommentButton from './CommentButton';
import HeartButton from './HeartButton';
import VideoAvatar from './VideoAvatar';

const Interaction = ({ isHome, opData, data, ssid }) => {
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
      {isHome && <VideoAvatar opData={opData} />}
      <HeartButton
        isHeart={hs}
        count={count_heart}
        ssid={ssid}
        op_id={opData.id}
      />
      <CommentButton isHome={isHome} count={count_comment} ssid={ssid} />
      <BookmarkButton isBM={bm} ssid={ssid} />
    </Box>
  );
};

export default Interaction;
