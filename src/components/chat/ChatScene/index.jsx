import { useFocusedRoomData } from '@/templates/global/ChatRoomInFocused';
import convertChatMsg from '@/utils/convertMessages';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {
  useMutateChat,
  useMutateLastReadMess,
} from 'backend/mutation/ChatMutation';
import { useQueryInfiniteMessages } from 'backend/services/ChatServices';
import FlatList from 'flatlist-react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import ContentInput from '../../content_input';
import ChatMsg from './ChatMsg';

const ChatScene = () => {
  const router = useRouter();
  const room_id = router.query.id;
  const { chatter, lastRead } = useFocusedRoomData();

  const [messages, setMessages] = useState();

  const { data } = useQueryInfiniteMessages(room_id);

  const { mutate: addChat } = useMutateChat();
  const { mutate: changeLastRead } = useMutateLastReadMess();

  const sendMsg = (content) => {
    addChat({ content: content, room_id: room_id, receiver: chatter.id });
  };

  const renderItem = useCallback(
    (item) => {
      return (
        <ChatMsg
          key={item.uuid}
          id={item.id}
          side={item.side}
          avatarUrl={chatter.avatar_url}
          displayname={chatter.displayname}
          messages={item.msg}
        />
      );
    },
    [chatter],
  );

  useEffect(() => {
    if (!data) return;
    if (data.length === 0) return;

    if (lastRead !== data[0].id) {
      changeLastRead({ room_id: room_id, messID: data[0].id });
    }

    setMessages(convertChatMsg(data));
  }, [data, changeLastRead, lastRead, room_id]);

  return (
    <Box
      className="flex col"
      sx={{
        flex: 1,
        borderRadius: '12px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 0px 2px',
      }}
    >
      {chatter ? (
        <>
          <List
            sx={{
              display: 'flex',
              flex: 1,
              width: '100%',
              flexDirection: 'column-reverse',
              overflowY: 'scroll',
              py: '1rem',
              px: '0.8rem',
            }}
          >
            <FlatList list={messages} renderItem={renderItem} />
          </List>

          <ContentInput sendFn={sendMsg} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ChatScene;
