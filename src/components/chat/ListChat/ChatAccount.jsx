import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';

import { useQueryLastMessage } from '../../../../backend/services/ChatServices';
import useQueryUserData from '../../../../backend/services/ProfileServices';
import {
  changeChatRoom,
  useIsFocusedChatRoom,
} from '../../../templates/global/ChatRoomInFocused';
import { clientID } from '../../../templates/global/ClientData';
import getFirstLetter from '../../../templates/hooks/getFirstLetter';

const ChatAccount = ({ data }) => {
  const { room_id, parti_id } = data;
  const client_id = clientID.get();

  const [haveRead, setHaveRead] = useState(false);
  const isChat = useIsFocusedChatRoom(room_id);

  const { data: chatter, isSuccess: cd1 } = useQueryUserData(parti_id);
  const { data: lastMsg, isSuccess: cd2 } = useQueryLastMessage(room_id);

  useEffect(() => {
    if (!lastMsg) return;

    if (lastMsg.id === lastMsg.last_read_id) setHaveRead(true);
    else setHaveRead(false);
  }, [lastMsg]);

  return (
    <ButtonBase
      className="flex row"
      sx={{
        width: '100%',
        alignItems: 'center',
        borderRadius: '12px',
        my: '0.7rem',
        p: '5px',
        gap: '0.5rem',
        justifyContent: 'flex-start',
        backgroundColor: isChat ? '#242F3C' : '',
      }}
      onClick={() => changeChatRoom(room_id, chatter)}
    >
      <Avatar
        alt="chat"
        sx={{ width: '3rem', height: '3rem', mr: '5px' }}
        src={chatter.avatar_url}
      >
        {getFirstLetter(chatter.displayname)}
      </Avatar>
      <Box>
        <Typography
          sx={{ textAlign: 'left', color: haveRead ? '#71767B' : 'white' }}
          variant="string"
          component="h6"
        >
          {chatter.displayname}
        </Typography>
        <Typography
          sx={{ color: haveRead ? '#71767B' : 'white' }}
          variant="string"
        >
          {lastMsg.sender === client_id ? 'You: ' : ''}
          {lastMsg.content}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default ChatAccount;
