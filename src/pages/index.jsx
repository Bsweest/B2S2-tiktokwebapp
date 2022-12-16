import { useObservable } from '@legendapp/state/react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

import ListVideo from '../components/shortvideo/ListVideo';
import SideBarComment from '../components/sidebar/SideBarComment';
import SideBarHome from '../components/sidebar/SideBarHome';
import { openCommentSection } from '../templates/global/CommentSection';
import { useKeyboardControl } from '../templates/hooks/useKeyBoardControl';

export default function Home() {
  const { heart, comment, bookmark } = useKeyboardControl();

  const currentElement = useObservable(null);

  useEffect(() => {
    if (comment) openCommentSection();
  }, [comment]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <SideBarHome />

      <ListVideo currentElement={currentElement} />

      <SideBarComment />
    </Box>
  );
}
