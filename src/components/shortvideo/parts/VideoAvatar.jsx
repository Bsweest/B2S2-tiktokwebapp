import Box from '@mui/material/Box';
import useMutateFollow from 'backend/mutation/FollowMutate';
import { useQueryCheckFollow } from 'backend/services/ProfileServices';
import { motion } from 'framer-motion';
import Image from 'next/Image';
import { useRef } from 'react';

const VideoAvatar = ({ opData }) => {
  const { id, avatar_url, displayname } = opData;

  return (
    <Box
      sx={{
        width: '4rem',
        height: '4rem',
        position: 'relative',
        mb: '2rem',
      }}
    >
      <Image
        alt="avatar"
        fill={true}
        sizes="4rem"
        style={{ borderRadius: '50%', pointerEvents: 'all', cursor: 'pointer' }}
        src={
          avatar_url
            ? avatar_url
            : `https://ui-avatars.com/api/?background=random&name=${displayname}`
        }
      />
      <FollowButton op_id={id} />
    </Box>
  );
};

const FollowButton = ({ op_id }) => {
  const isDone = useRef(true);

  const { data: isFollow, isSuccess } = useQueryCheckFollow(op_id);

  const { mutate } = useMutateFollow();

  const onAnimationComplete = () => (isDone.current = true);

  const update = () => {
    if (!isDone.current) return;
    isDone.current = false;
    mutate({ op_id: op_id, bool: !isFollow });
  };

  return (
    <motion.svg
      viewBox="0 0 64 64"
      fill="none"
      width={30}
      height={30}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: '-1rem',
        left: '1.1rem',
        cursor: 'pointer',
      }}
      variants={variantSvg}
      animate={isFollow ? 'follow' : 'notfollow'}
      transition={{
        type: 'tween',
        duration: 0.8,
      }}
      onAnimationComplete={onAnimationComplete}
      onClick={update}
    >
      <motion.circle
        cx={32}
        cy={32}
        r={31}
        stroke="#EA4359"
        variants={variantCircle}
      />
      <motion.path variants={variantPath} />
    </motion.svg>
  );
};

const variantSvg = {
  follow: { scale: [1, 1.2, 1] },
  notfollow: { scale: 1 },
};
const variantCircle = {
  follow: {
    fill: '#FBFBFB',
    strokeWidth: 3,
  },
  notfollow: {
    fill: '#EA4359',
    strokeWidth: 0,
  },
};
const variantPath = {
  follow: {
    d: 'M51.1955 18.0076L25.7323 43.769L12.8036 30.6538C11.4757 29.3104 9.32378 29.3104 7.9959 30.6538C6.66803 31.9973 6.66803 34.1744 7.9959 35.5178L23.2073 50.9414C24.6025 52.3529 26.864 52.3529 28.2592 50.9414L56.0041 22.8715C57.332 21.5281 57.332 19.351 56.0041 18.0076C54.6762 16.6641 52.5234 16.6641 51.1955 18.0076Z',
    fill: '#3DCA76',
  },
  notfollow: {
    d: 'M35.0476 20.3636C35.0476 18.757 33.6832 17.4545 32 17.4545C30.3169 17.4545 28.9524 18.757 28.9524 20.3636V29.0909H19.8095C18.1264 29.0909 16.7619 30.3933 16.7619 32C16.7619 33.6067 18.1264 34.9091 19.8095 34.9091H28.9524V43.6364C28.9524 45.2431 30.3169 46.5455 32 46.5455C33.6832 46.5455 35.0476 45.2431 35.0476 43.6364V34.9091H44.1905C45.8737 34.9091 47.2381 33.6067 47.2381 32C47.2381 30.3933 45.8737 29.0909 44.1905 29.0909H35.0476V20.3636Z',
    fill: '#FFFFFF',
  },
};

export default VideoAvatar;
