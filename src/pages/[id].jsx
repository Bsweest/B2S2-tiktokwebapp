import SideBarHome from '@/components/sidebar/SideBarHome';
import getFirstLetter from '@/templates/hooks/getFirstLetter';
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
import { useClientData } from 'backend/services/ProfileServices';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Profile = () => {
  const router = useRouter();
  const id = router.query.id;

  const [value, setValue] = useState(0);
  const [isFollow, setIsFollow] = useState(false);

  const {
    data: { username, displayname, bio, avatar_url },
    isSuccess,
  } = useClientData();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickFollow = () => {
    if (isFollow) setIsFollow(false);
    else setIsFollow(true);
  };

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
        }}
      >
        <Box sx={{ width: '650px', marginBottom: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar sx={{ width: '150px', height: '150px' }} src={avatar_url}>
              {getFirstLetter(displayname)}
            </Avatar>
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
                {displayname}
              </Typography>
              <Typography sx={{ color: '#f1f1f1' }}>@{username}</Typography>
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
            lol
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
