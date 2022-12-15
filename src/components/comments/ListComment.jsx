import FlatList from 'flatlist-react';

import ParentComment from './ParentComment';

const ListComment = () => {
  const data = [0, 2, 3, 4];
  const renderItem = (item, index) => {
    return <ParentComment key={index} />;
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '7px' }}>
      <FlatList list={data} renderItem={renderItem} />
    </div>
  );
};

export default ListComment;