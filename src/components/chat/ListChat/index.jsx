import { useObservable } from '@legendapp/state/react';
import FlatList from 'flatlist-react';

import ChatAccount from './ChatAccount';

const ListChat = () => {
  const data = [0, 2, 3, 4];
  const currentChat = useObservable(null);

  const renderItem = (item, index) => {
    return <ChatAccount key={index} currentChat={currentChat} item={item} />;
  };

  return (
    <div style={{ flex: 1, overflowY: 'scroll' }}>
      <FlatList list={data} renderItem={renderItem} />
    </div>
  );
};

export default ListChat;
