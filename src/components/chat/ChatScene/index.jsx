import Box from '@mui/material/Box';

import ChatMsg from './ChatMsg';

const ChatScene = () => {
  return (
    <Box
      className="flex col"
      sx={{
        borderRadius: '12px',
        flex: 1,
        overflowY: 'scroll',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        py: '1rem',
        px: '0.8rem',
      }}
    >
      <ChatMsg
        avatar={''}
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
      <ChatMsg side={'right'} messages={["Great! What's about you?"]} />
      <ChatMsg avatar={''} messages={['Im good.']} />
    </Box>
  );
};

export default ChatScene;
