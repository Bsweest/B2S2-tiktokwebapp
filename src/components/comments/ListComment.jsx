import FlatList from 'flatlist-react';

import ParentComment from './ParentComment';

const renderItem = (item) => {
  return <ParentComment key={item.id} data={item} />;
};

const ListComment = ({ list }) => {
  return (
    <div
      className="flex col"
      style={{
        overflowY: 'scroll',
        padding: '7px 7px 0px 7px',
      }}
    >
      <FlatList list={list} renderItem={renderItem} />
    </div>
  );
};

export default ListComment;
