import HeadphonesIcon from '@mui/icons-material/Headphones';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import ListComment from '../comments/ListComment';

const SideBarShortDetail = () => {
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
            <Typography textOverflow="ellipsis" variant="string" component="h6">
              Displayname
            </Typography>
            <Typography textOverflow="ellipsis" variant="subtitle1">
              @username
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
          content
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HeadphonesIcon sx={{ width: 30, height: 30, marginRight: '7px' }} />
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
            http://localhost:3000/short/1234liketheyworkshipus
          </Typography>
          <Button sx={{ textTransform: 'none', fontWeight: 'bold' }}>
            Copy Link
          </Button>
        </Box>
      </Box>

      <Box
        sx={{ backgroundColor: '#121212', pt: '0.5rem', px: '0.5rem', flex: 1 }}
      >
        <ListComment />
      </Box>
    </div>
  );
};

export default SideBarShortDetail;
