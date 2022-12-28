import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Box, ButtonBase, Typography } from '@mui/material';
import FlatList from 'flatlist-react';
import Image from 'next/image';
import Link from 'next/link';

const VideoItem = ({ data }) => {
  const { id, poster_uri } = data;

  return (
    <Link href={`/short/${id}`}>
      <Box
        sx={{
          width: '210px',
          height: '320px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Image
          alt="list-item"
          src={poster_uri ? poster_uri : '/img/placeholder/poster.svg'}
          fill={true}
        />
        <Box
          className="flex row"
          sx={{ position: 'absolute', bottom: 10, left: 10 }}
        >
          <PlayArrowOutlinedIcon />
          <Typography variant="string" color="white">
            1.1B
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

const ListVideoItems = ({ list }) => {
  return (
    <FlatList
      list={list}
      renderItem={renderItem}
      display={{
        grid: true,
        gridGap: '5px',
      }}
    />
  );
};

const renderItem = (item) => {
  return <VideoItem data={item} key={item.id} />;
};

export default ListVideoItems;
