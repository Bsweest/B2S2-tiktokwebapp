import Container from '@mui/material/Container';
import List from '@mui/material/List';

import ShortVideo from '../components/shortvideo';
import SideBarHome from '../components/sidebar/SideBarHome';
import Main from '../templates/Main';

export default function Home() {
  return (
    <Main>
      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <SideBarHome />
        <List>
          <ShortVideo />
          <ShortVideo />
        </List>
      </Container>
    </Main>
  );
}
