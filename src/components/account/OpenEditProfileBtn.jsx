import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Button, Dialog, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { supabase } from 'backend/supabase';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OpenEditProfileBtn = () => {
  const [isShow, setIsShow] = useState(false);
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [bio, setBio] = useState('');

  const handleClickOpen = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeDisplayname = (event) => {
    setDisplayname(event.target.value);
  };

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };

  useEffect(() => {
    getProfileUser();
  }, []);

  async function getProfileUser() {
    const id = window.localStorage.getItem('userId');

    const result = await supabase.from('profiles').select().eq('id', id);
    const user = result.data[0];
    setUsername(user.username);
    setBio(user.bio);
    setDisplayname(user.displayname);
  }

  async function updateProfileUser() {
    const id = window.localStorage.getItem('userId');

    const result = await supabase
      .from('profiles')
      .update({
        username: username,
        displayname: displayname,
        bio: bio,
      })
      .eq('id', id);
    handleClose();
    location.reload();
  }
  return (
    <>
      <Button
        sx={{
          height: '40px',
          width: '180px',
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
        startIcon={<BorderColorRoundedIcon />}
        onClick={handleClickOpen}
      >
        Edit profile
      </Button>

      <Dialog maxHeight="lg" maxWidth="lg" open={isShow}>
        <Box
          sx={{
            width: 800,
            height: 700,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottom: '1px solid #a4a4a4',
              marginBottom: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#cfcfcf',
                margin: '25px',
              }}
            >
              Edit profile
            </Typography>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                margin: 2,
                backgroundColor: '#636363',
                cursor: 'pointer',
                color: '#444444',
              }}
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </Avatar>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '25px',
              paddingRight: '25px',
              marginBottom: '65px',
              alignItems: 'center',
              overflow: 'auto',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '150px',
                borderBottom: '1px solid #686868',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  left: '25px',
                  color: '#b8b8b8',
                }}
              >
                Profile photo
              </Typography>
              <Box>
                <Avatar
                  sx={{
                    height: '120px',
                    width: '120px',
                  }}
                />
                <Avatar
                  sx={{
                    position: 'relative',
                    bottom: '30px',
                    left: '70px',
                    border: '1px solid #202020',
                    cursor: 'pointer',
                  }}
                >
                  <BorderColorRoundedIcon sx={{ height: '18px' }} />
                </Avatar>
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                height: '100px',
                borderBottom: '1px solid #686868',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  left: '25px',
                  color: '#b8b8b8',
                }}
              >
                Username
              </Typography>
              <Box sx={{ width: '300px' }}>
                <TextField
                  value={username}
                  onChange={handleChangeUsername}
                  size="small"
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                />
                <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
                  Usernames can only contain letters, numbers, underscores, and
                  periods.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                height: '80px',
                borderBottom: '1px solid #686868',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  left: '25px',
                  color: '#b8b8b8',
                }}
              >
                Name
              </Typography>
              <Box sx={{ width: '300px' }}>
                <TextField
                  value={displayname}
                  onChange={handleChangeDisplayname}
                  size="small"
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                />
                <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
                  Your name should be between 4 and 16 characters
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                height: '120px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  left: '25px',
                  color: '#b8b8b8',
                }}
              >
                Bio
              </Typography>
              <Box sx={{ width: '300px' }}>
                <TextField
                  value={bio}
                  onChange={handleChangeBio}
                  size="small"
                  multiline
                  rows={3}
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                />
                <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
                  Max 80 characters
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: 55,
              width: '100%',
              borderTop: '1px solid #a4a4a4',
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '10px',
            }}
          >
            <Button
              sx={{
                textTransform: 'none',
                p: '6px',
                color: '#b8b8b8',
                borderColor: '#b8b8b8',
                marginRight: '12px',
                width: '100px',
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: 'none',
                p: '6px',
                backgroundColor: '#FE2C55',
                '&:hover': {
                  backgroundColor: '#a80022',
                },
                color: 'white',
                marginRight: '12px',
                width: '100px',
              }}
              variant="contained"
              onClick={updateProfileUser}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default OpenEditProfileBtn;
