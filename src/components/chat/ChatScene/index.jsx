import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useQueryClient } from '@tanstack/react-query';
import FlatList from 'flatlist-react';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { useQueryInfiniteMessages } from '../../../../backend/services/ChatServices';
import { useFocusedRoom } from '../../../templates/global/ChatRoomInFocused';
import { clientID } from '../../../templates/global/ClientData';
import ContentInput from '../../content_input';
import ChatMsg from './ChatMsg';

const ChatScene = () => {
  const { roomID, chatter } = useFocusedRoom();
  const queryClient = useQueryClient();

  const [messages, setMessages] = useState();

  const { data, isFetching } = useQueryInfiniteMessages(roomID);

  const AppendMsg = (msg) => {
    queryClient.setQueryData(['get_chat_messages', roomID], (prev) => [
      {
        id: v4(),
        sender: '6e25bebf-aaaa-4e98-89c2-6f11211f9539',
        content: msg,
        created_at: new Date().toString(),
      },
      ...prev,
    ]);
  };

  useEffect(() => {
    if (!data) return;
    setMessages(convertChatMsg(data));
  }, [data]);

  const renderItem = (item) => {
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
  };

  return (
    <Box
      className="flex col"
      sx={{
        flex: 1,
        borderRadius: '12px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 0px 2px',
      }}
    >
      <Box
        className="flex col"
        sx={{
          flex: 1,
          overflowY: 'scroll',
          py: '1rem',
          px: '0.8rem',
          alignItems: 'flex-end',
        }}
      >
        {chatter ? (
          <List
            sx={{
              display: 'flex',
              flex: 1,
              width: '100%',
              flexDirection: 'column-reverse',
            }}
          >
            <FlatList list={messages} renderItem={renderItem} />
          </List>
        ) : (
          <></>
        )}
      </Box>

      <ContentInput submitText={AppendMsg} />
    </Box>
  );
};

// const appendChat = (data, msg) => {
//   const side = 'right';

//   const id = v4();
//   const content = msg;
//   const created_at = new Date().toString();

//   if (side === data[0].side) {
//     data[0].id.unshift(id);
//     data[0].msg.unshift(content);
//     data[0].createdAt.unshift(created_at);
//   } else {
//     data.unshift({
//       uuid: v4(),
//       side: side,
//       id: [id],
//       msg: [content],
//       createdAt: [created_at],
//     });
//   }
//   return data;
// };

const convertChatMsg = (data) => {
  const client = clientID.peek();
  if (data.length === 0) return;

  let sid = data[0].sender;
  let index = 0;
  const rs = [
    {
      uuid: v4(),
      side: client === sid ? 'right' : 'left',
      id: [],
      msg: [],
      createdAt: [],
    },
  ];

  for (let i = 0; i < data.length; ++i) {
    if (sid !== data[i].sender) {
      sid = data[i].sender;
      rs.push({
        uuid: v4(),
        side: client === sid ? 'right' : 'left',
        id: [],
        msg: [],
        createdAt: [],
      });
      ++index;
    }

    rs[index].id.push(data[i].id);
    rs[index].msg.push(data[i].content);
    rs[index].createdAt.push(data[i].created_at);
  }

  return rs;
};

export default ChatScene;
