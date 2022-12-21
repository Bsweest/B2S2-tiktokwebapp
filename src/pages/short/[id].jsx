import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

import { useQuerySingleVideo } from '../../../backend/services/GetNewFeed';
import ShortVideo from '../../components/shortvideo';
import SideBarShortDetail from '../../components/sidebar/SideBarShortDetail';

const ShortDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isSuccess } = useQuerySingleVideo(id);

  const onClick = () => {
    router.back();
  };

  return (
    <>
      {isSuccess ? (
        <>
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'black',
              zIndex: 0,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <ShortVideo data={data} isHome={false} />
            </Box>

            <SideBarShortDetail data={data} />
          </Box>
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              zIndex: '10',
            }}
            aria-label="goback"
            onClick={onClick}
          >
            <CancelRoundedIcon
              sx={{
                width: '45px',
                height: '45px',
                color: 'lightgrey',
                '&:hover': {
                  color: '#414242',
                },
              }}
            />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShortDetail;
