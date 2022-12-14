import ChatScene from '@/components/chat/ChatScene';
import SideBarMessages from '@/components/sidebar/SideBarMessages';
import Container from '@mui/material/Container';

const Message = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100%',
        py: '20px',
        gap: '1rem',
      }}
      maxWidth="lg"
    >
      <SideBarMessages />
      <ChatScene />
    </Container>
  );
};

export default Message;
