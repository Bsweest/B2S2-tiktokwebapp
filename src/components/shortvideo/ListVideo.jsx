import List from '@mui/material/List';
import FlatList from 'flatlist-react';

import ShortVideo from '.';

const ListVideo = ({ currentElement }) => {
  const data = [0, 2, 3];

  const renderItem = (item, index) => {
    return (
      <ShortVideo item={item} key={index} currentElement={currentElement} />
    );
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
      <FlatList list={data} renderItem={renderItem} />
    </List>
  );
};

export default ListVideo;
