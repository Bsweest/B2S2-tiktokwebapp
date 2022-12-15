import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import HotAccount from '../account/HotAccount';

const SideBarHome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        height: '100%',
        overflowY: 'auto',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#FE2C55' }} />
          </ListItemIcon>
          <ListItemText
            primary="For You"
            primaryTypographyProps={{
              color: '#FE2C55',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#161823' }} />
          </ListItemIcon>
          <ListItemText
            primary="Following"
            primaryTypographyProps={{
              color: '#161823',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <VideocamIcon sx={{ color: '#161823' }} />
          </ListItemIcon>
          <ListItemText
            primary="LIVE"
            primaryTypographyProps={{
              color: '#161823',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}
          />
        </ListItemButton>

        <List
          sx={{ width: '100%', height: '100%' }}
          subheader={
            <ListSubheader style={{ fontWeight: 'bold', fontSize: 13 }}>
              Suggested accounts
            </ListSubheader>
          }
        >
          {[0, 1, 2].map((item, index) => (
            <HotAccount key={index} />
          ))}
        </List>
      </List>
    </Box>
  );
};

export default SideBarHome;
