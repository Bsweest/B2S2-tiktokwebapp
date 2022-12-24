import {
  Avatar,
  Box,
  Button,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { supabase } from '../../../backend/supabase';
import SideBarHome from '../../components/sidebar/SideBarHome';

const UserProfile = () => {
  const [value, setValue] = useState(0);
  const [isFollow, setIsFollow] = useState(false);
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickFollow = () => {
    if (isFollow) setIsFollow(false);
    else setIsFollow(true);
  };

  useEffect(() => {
    getProfileUser();
  }, []);

  async function getProfileUser() {
    const result = await supabase
      .from('profiles')
      .select()
      .eq('id', '74e85020-5c01-46b6-9b23-0a2cd4a7c76b');
    const user = result.data[0];
    setUsername(user.username);
    setBio(user.bio);
    setDisplayname(user.displayname);
    setAvatar(user.avatar_url);
  }

  return (
    <Box
      className="flex row"
      sx={{
        flex: 1,
      }}
    >
      <SideBarHome />

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          overflow: 'auto',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '5px solid #121212',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
        }}
      >
        <Box sx={{ width: '650px', marginBottom: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar src={avatar} sx={{ width: '150px', height: '150px' }} />
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 0px 0px 20px',
              }}
            >
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', color: '#f1f1f1' }}
              >
                {username}
              </Typography>
              <Typography sx={{ color: '#f1f1f1' }}>{displayname}</Typography>
              {isFollow ? (
                <Button
                  sx={{
                    height: '40px',
                    width: '250px',
                    marginTop: '28px',
                    textTransform: 'none',
                    p: '12px',
                    '&:hover': {
                      backgroundColor: '#313131',
                    },
                    color: '#f1f1f1',
                    fontWeight: '700',
                    fontSize: '16px',
                  }}
                  variant="outlined"
                  onClick={handleClickFollow}
                >
                  Followed ✓
                </Button>
              ) : (
                <Button
                  sx={{
                    height: '40px',
                    width: '250px',
                    marginTop: '28px',
                    textTransform: 'none',
                    p: '12px',
                    backgroundColor: '#FE2C55',
                    '&:hover': {
                      backgroundColor: '#a80022',
                    },
                    color: '#f1f1f1',
                    fontWeight: '700',
                    fontSize: '16px',
                  }}
                  variant="contained"
                  onClick={handleClickFollow}
                >
                  Follow
                </Button>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: '15px 0px 15px 0px',
              gap: '20px',
            }}
          >
            <Box className="flex row" sx={{ gap: '10px' }}>
              <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                22
              </Typography>
              <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                Following
              </Typography>
            </Box>
            <Box className="flex row" sx={{ gap: '10px' }}>
              <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                132K
              </Typography>
              <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                Followers
              </Typography>
            </Box>
            <Box className="flex row" sx={{ gap: '10px' }}>
              <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                100M
              </Typography>
              <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                Likes
              </Typography>
            </Box>
          </Box>

          <Typography>{bio}</Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                sx={{
                  textTransform: 'none',
                  width: '200px',
                  fontSize: '18px',
                }}
                label="Videos"
              />
              <Tab
                sx={{
                  textTransform: 'none',
                  width: '200px',
                  fontSize: '18px',
                }}
                label="Liked"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ImageList cols={6}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Private
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: '5px' }}>{children}</Box>}
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default UserProfile;
