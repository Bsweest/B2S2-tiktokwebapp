import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { supabase } from 'backend/supabase';
import FlatList from 'flatlist-react';
import _ from 'lodash';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';

import HotAccount from '../account/HotAccount';

const SideBarHome = () => {
  const [resultAccount, setResultAccount] = useState([]);
  // const id = window.localStorage.getItem('userId');
  const id = '74e85020-5c01-46b6-9b23-0a2cd4a7c76b';

  async function getTop5() {
    const rs = await supabase.from('profiles').select('id');
    const arr = [];
    const user = [];
    for (let i = 0; i < rs.data.length; i++) {
      arr.push(rs.data[i].id);
    }
    const x = _.shuffle(arr);
    for (let i = 0; i < 5; i++) {
      const final = await supabase.from('profiles').select().eq('id', x[i]);
      user.push(final.data[0]);
    }
    setResultAccount(user);
  }

  const renderAccount = (item) => {
    return <HotAccount data={item} key={item.id} />;
  };

  useEffect(() => {
    getTop5();
  }, []);

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
          <Link href={`/following/${id}`}>
            <ListItemText
              primary="Following"
              primaryTypographyProps={{
                color: '#f1f1f1',
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
          <FlatList list={resultAccount} renderItem={renderAccount} />
        </List>
      </List>
    </Box>
  );
};

export default SideBarHome;
