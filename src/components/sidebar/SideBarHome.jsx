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
      className="flex col"
      sx={{
        width: '350px',
        height: '100%',
        overflowY: 'auto',
        alignItems: 'center',
      }}
    >
      <List sx={{ width: '250px' }}>
        <ListItemButton sx={{ borderRadius: '15px' }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="For You"
            primaryTypographyProps={{
              color: '#f1f1f1',
              fontSize: '1.1rem',
              fontWeight: '400px',
              fontFamily: 'cursive',
            }}
          />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: '15px' }}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Following"
            primaryTypographyProps={{
              color: '#f1f1f1',
              fontSize: '1.1rem',
              fontWeight: '400px',
              fontFamily: 'cursive',
            }}
          />
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: '15px' }}>
          <ListItemIcon>
            <VideocamIcon />
          </ListItemIcon>
          <ListItemText
            primary="LIVE"
            primaryTypographyProps={{
              color: '#f1f1f1',
              fontSize: '1.1rem',
              fontWeight: '400px',
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
