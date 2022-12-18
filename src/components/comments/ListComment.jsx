import FlatList from 'flatlist-react';

import ParentComment from './ParentComment';

const ListComment = () => {
  const data = [0, 2, 3, 4];
  const renderItem = (item, index) => {
    return <ParentComment key={index} />;
  };
  return (
    <div
      className="flex col"
      style={{
        overflowY: 'scroll',
        padding: '7px 7px 0px 7px',
      }}
    >
      <FlatList list={data} renderItem={renderItem} />
    </div>
  );
};

export default ListComment;
