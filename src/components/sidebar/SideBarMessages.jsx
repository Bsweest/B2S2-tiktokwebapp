import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQueryChatRooms } from 'backend/services/ChatServices';

import ListChat from '../chat/ListChat';

const SideBarMessages = () => {
  const { data: listFriendChat, isSuccess } = useQueryChatRooms(true);

  return (
    <Box
      className="flex col"
      sx={{
        width: '350px',
        borderRadius: '12px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 0px 2px',
        py: '5px',
        px: '1rem',
      }}
    >
      <Box
        sx={{
          height: '45px',
          alignItems: 'center',
          display: 'flex',
          gap: '2rem',
          borderBottom: '0.5px solid lightgrey',
        }}
      >
        <Typography
          variant="caption"
          fontWeight="700"
          fontSize="1.5rem"
          fontFamily="Arial"
        >
          Messages
        </Typography>
      </Box>

      <ListChat list={listFriendChat} />
    </Box>
  );
};

export default SideBarMessages;
