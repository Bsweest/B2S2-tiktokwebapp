import { clientID } from '@/templates/global/ClientData';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useQueryTopFollow } from 'backend/services/ShortService';
import FlatList from 'flatlist-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HotAccount from '../account/HotAccount';

const renderAccount = (item) => {
  return <HotAccount data={item} key={item.id} />;
};

const SideBarHome = () => {
  const router = useRouter();
  const choose =
    router.pathname === '/' ? 0 : router.pathname === '/following' ? 1 : 2;

  const { data, isSuccess } = useQueryTopFollow();

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
          <Link href="/">
            <ListItemText
              primary="For You"
              primaryTypographyProps={{
                color: choose === 0 ? '#EA2D50' : '#f1f1f1',
                fontSize: '1.1rem',
                fontWeight: '400px',
                fontFamily: 'cursive',
              }}
            />
          </Link>
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: '15px' }}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link href="/following">
            <ListItemText
              primary="Following"
              primaryTypographyProps={{
                color: choose === 1 ? '#EA2D50' : '#f1f1f1',
                fontSize: '1.1rem',
                fontWeight: '400px',
                fontFamily: 'cursive',
              }}
            />
          </Link>
        </ListItemButton>

        <ListItemButton sx={{ borderRadius: '15px' }}>
          <ListItemIcon>
            <VideocamIcon />
          </ListItemIcon>
          <ListItemText
            primary="LIVE"
            primaryTypographyProps={{
              color: choose === 2 ? '#EA2D50' : '#f1f1f1',
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
          <FlatList list={data} renderItem={renderAccount} />
        </List>
      </List>
    </Box>
  );
};

export default SideBarHome;
