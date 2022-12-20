import FlatList from 'flatlist-react';

import ParentComment from './ParentComment';

const ListComment = ({ list }) => {
  const renderItem = (item, index) => {
    return <ParentComment key={index} data={item} />;
  };

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
