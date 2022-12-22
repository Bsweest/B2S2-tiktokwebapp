import { useObservable } from '@legendapp/state/react';
import FlatList from 'flatlist-react';

import ChatAccount from './ChatAccount';

const renderItem = (item) => {
  return <ChatAccount key={item.room_id} data={item} />;
};

const ListChat = ({ list }) => {
  return (
    <div style={{ flex: 1, overflowY: 'scroll' }}>
      <FlatList list={list} renderItem={renderItem} />
    </div>
  );
};

export default ListChat;
