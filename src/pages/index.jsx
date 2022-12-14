import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ShortVideo from '../components/shortvideo';
import SideBarComment from '../components/sidebar/SideBarComment';
import SideBarHome from '../components/sidebar/SideBarHome';

export default function Home() {
  const data = [1, 2, 3, 4];

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <SideBarHome />

      <List
        sx={{
          flex: 1,
          overflowY: 'scroll',
          height: 'calc(100vh - 60px)',
          scrollSnapType: 'y mandatory',
          scrollSnapStop: 'normal',
        }}
      >
        {data.map((item, index) => (
          <ShortVideo key={index} />
        ))}
      </List>

      <SideBarComment />
    </Box>
  );
}
