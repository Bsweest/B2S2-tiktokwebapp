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
        flex: 2,
        height: 'fit-content',
        overflowY: 'auto',
        alignItems: 'center',
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#FE2C55' }} />
          </ListItemIcon>
          <ListItemText
            primary="For You"
            style={{
              color: '#FE2C55',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#161823' }} />
          </ListItemIcon>
          <ListItemText
            primary="Following"
            style={{
              color: '#161823',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <VideocamIcon sx={{ color: '#161823' }} />
          </ListItemIcon>
          <ListItemText
            primary="LIVE"
            style={{
              color: '#161823',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </ListItemButton>

        <List
          sx={{ width: '100%', height: '100%' }}
          subheader={
            <ListSubheader
              disableTypography
              style={{ fontWeight: 'bold', fontSize: 13 }}
            >
              Suggested accounts
            </ListSubheader>
          }
        >
          <HotAccount />
          <HotAccount />
          <HotAccount />
        </List>
      </List>
    </Box>
  );
};

export default SideBarHome;
