import HeadphonesIcon from '@mui/icons-material/Headphones';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useQueryCommentSection } from 'backend/services/GetComments';
import useQueryUserData from 'backend/services/ProfileServices';
import Link from 'next/link';
import { useEffect } from 'react';

import ListComment from '../comments/ListComment';

const SideBarShortDetail = ({ data }) => {
  const ac = new AbortController();

  const { id: ssid, created_at, op_id, uri, caption, music } = data;

  const { data: listComment, isSuccess: cd1 } = useQueryCommentSection(
    ssid,
    null,
    ac,
    true,
  );
  const { data: opData, isSuccess: cd2 } = useQueryUserData(op_id);

  useEffect(() => {
    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex col">
      <Box
        className="flex col"
        sx={{
          width: '500px',
          borderBottom: '1px solid lightgrey',
          px: '2rem',
          mt: '2rem',
        }}
      >
        {cd2 ? (
          <>
            <Grid
              container
              sx={{
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'nowrap',
              }}
            >
              <Avatar sx={{ width: '50px', height: '50px' }} />
              <Grid
                xs={9}
                item
                className="flex row"
                sx={{
                  flex: 1,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '5px',
                }}
              >
                <Typography
                  textOverflow="ellipsis"
                  variant="string"
                  component="h6"
                >
                  {opData.displayname}
                </Typography>
                <Typography textOverflow="ellipsis" variant="subtitle1">
                  @{opData.username}
                </Typography>
              </Grid>

              <Button
                variant="outlined"
                color="error"
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              >
                Follow
              </Button>
            </Grid>

            <Typography variant="string" sx={{ my: '1rem' }}>
              {caption}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HeadphonesIcon
                sx={{ width: 30, height: 30, marginRight: '7px' }}
              />
              <Link className="link" href="/about">
                Music
              </Link>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: '5px',
                my: '1rem',
                borderRadius: '12px',
                border: '1px solid lightgrey',
              }}
            >
              <Typography
                sx={{ flex: 1 }}
                textOverflow="ellipsis"
                noWrap
                variant="subtitle1"
              >
                {`http://localhost:3000/short/${ssid}`}
              </Typography>
              <Button sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                Copy Link
              </Button>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>

      <Box
        sx={{ backgroundColor: '#121212', pt: '0.5rem', px: '0.5rem', flex: 1 }}
      >
        <ListComment list={listComment} />
      </Box>
    </div>
  );
};

export default SideBarShortDetail;
