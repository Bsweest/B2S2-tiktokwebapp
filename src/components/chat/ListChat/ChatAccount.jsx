import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ChatAccount = () => {
  return (
    <ButtonBase
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderRadius: '1.5rem',
        my: '0.7rem',
        p: '2px',
        gap: '0.5rem',
        justifyContent: 'flex-start',
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
