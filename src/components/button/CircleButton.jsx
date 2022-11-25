import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CircleButton = (props) => {
  return (
    <div>
      <Box
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 5,
        }}
      >
        <Avatar style={{ width: 56, height: 56, backgroundColor: 'lightgray' }}>
          <ChatIcon style={{ cursor: 'pointer', color: 'black' }} />
        </Avatar>
      </Box>
      <Typography
        style={{
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        {props.text}
      </Typography>
    </div>
  );
};

export default CircleButton;
