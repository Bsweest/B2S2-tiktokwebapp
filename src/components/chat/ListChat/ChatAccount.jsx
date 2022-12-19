import { useSelector } from '@legendapp/state/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ChatAccount = ({ item, currentChat }) => {
  const isChat = useSelector(() => currentChat.get() === null);

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
        backgroundColor: isChat ? '#141E2A' : '',
      }}
    >
      <Avatar alt="chat" sx={{ width: '3rem', height: '3rem', px: '5px' }}>
        U
      </Avatar>
      <Box>
        <Typography sx={{ textAlign: 'left' }} variant="string" component="h6">
          User
        </Typography>
        <Typography variant="string">last message</Typography>
      </Box>
    </ButtonBase>
  );
};

export default ChatAccount;
