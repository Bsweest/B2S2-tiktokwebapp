import FlatList from 'flatlist-react';

import ChatAccount from './ChatAccount';

const ListChat = () => {
  const data = [0, 2, 3, 4];

  const renderItem = (item, index) => {
    return <ChatAccount key={index} />;
  };
  return (
    <div style={{ flex: 1, overflowY: 'scroll' }}>
      <FlatList list={data} renderItem={renderItem} />
    </div>
  );
};

export default ListChat;
