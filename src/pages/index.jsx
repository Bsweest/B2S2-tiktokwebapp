import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';

import ShortVideo from '../components/shortvideo';
import SideBarHome from '../components/sidebar/SideBarHome';
import Main from '../templates/Main';

export default function Home() {
  return (
    <Main>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <SideBarHome />
        <Box
          sx={{
            overflowY: 'auto',
            flex: 5,
          }}
        >
          <List>
            <ShortVideo />
            <ShortVideo />
          </List>
        </Box>
      </Box>
    </Main>
  );
}
