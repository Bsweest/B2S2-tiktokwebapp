import List from '@mui/material/List';
import FlatList from 'flatlist-react';

import ShortVideo from './';

const ListVideo = ({ feed }) => {
  const renderItem = (item, index) => {
    return <ShortVideo item={item} key={index} isHome={true} />;
  };

  return (
    <List
      sx={{
        flex: 1,
        overflowY: 'scroll',
        height: 'calc(100vh - 60px)',
        scrollSnapType: 'y mandatory',
        scrollSnapStop: 'normal',
      }}
    >
      <FlatList list={feed} renderItem={renderItem} />
    </List>
  );
};

export default ListVideo;
