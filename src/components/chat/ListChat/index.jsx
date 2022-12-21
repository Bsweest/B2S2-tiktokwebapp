import { useObservable } from '@legendapp/state/react';
import FlatList from 'flatlist-react';

import ChatAccount from './ChatAccount';

const ListChat = ({ list }) => {
  const renderItem = (item) => {
    return <ChatAccount key={item.room_id} data={item} />;
  };

  return (
    <div style={{ flex: 1, overflowY: 'scroll' }}>
      <FlatList list={list} renderItem={renderItem} />
    </div>
  );
};

export default ListChat;
