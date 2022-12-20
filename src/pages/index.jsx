import { useObservable } from '@legendapp/state/react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

import { useQueryFeedExplore } from '../../backend/services/GetNewFeed';
import ListVideo from '../components/shortvideo/ListVideo';
import SideBarComment from '../components/sidebar/SideBarComment';
import SideBarHome from '../components/sidebar/SideBarHome';
import { toggleCommentSection } from '../templates/global/ListVideoStates';
import { useKeyboardControl } from '../templates/hooks/useKeyBoardControl';

export default function Home() {
  const { heart, comment, bookmark } = useKeyboardControl();
  const { data: feedExplore } = useQueryFeedExplore();

  useEffect(() => {
    if (comment) toggleCommentSection();
  }, [comment]);

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
