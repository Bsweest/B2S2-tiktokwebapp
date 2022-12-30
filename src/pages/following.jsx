import ListVideo from '@/components/shortvideo/ListVideo';
import SideBarComment from '@/components/sidebar/SideBarComment';
import SideBarHome from '@/components/sidebar/SideBarHome';
import Box from '@mui/material/Box';
import { useQueryFollowShort } from 'backend/services/GetNewFeed';

const Following = () => {
  const { data } = useQueryFollowShort();

  return (
    <Box
      className="flex row"
      sx={{
        flex: 1,
      }}
    >
      <SideBarHome />

      <ListVideo feed={data} empty={RenderWhenEmpty} />

      <SideBarComment />
    </Box>
  );
};

const RenderWhenEmpty = () => {
  return <div>You haven&apos;t follow anyone</div>;
};

export default Following;
