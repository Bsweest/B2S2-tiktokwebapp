import Container from '@mui/material/Container';

import ChatScene from '../components/chat/ChatScene';
import ListChat from '../components/chat/ListChat';

const Messages = () => {
  return (
    <Container
      sx={{ display: 'flex', height: '100%', py: '20px', gap: '1rem' }}
      maxWidth="lg"
    >
      <ListChat />
      <ChatScene />
    </Container>
  );
};

export default Messages;
