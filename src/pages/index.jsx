import ListVideo from '@/components/shortvideo/ListVideo';
import SideBarComment from '@/components/sidebar/SideBarComment';
import SideBarHome from '@/components/sidebar/SideBarHome';
import { useKeyboardControl } from '@/templates/hooks/useKeyBoardControl';
import Box from '@mui/material/Box';
import { useQueryFeedExplore } from 'backend/services/GetNewFeed';

export default function Home() {
  const { data: feedExplore } = useQueryFeedExplore();

  useKeyboardControl();

  return (
    <Box
      className="flex row"
      sx={{
        flex: 1,
      }}
    >
      <SideBarHome />

      <ListVideo feed={feedExplore} />

      <SideBarComment />
    </Box>
  );
}
