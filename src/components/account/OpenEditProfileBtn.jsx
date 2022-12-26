import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useMutateProfileField } from 'backend/mutation/ProfileMutation';
import { useEffect } from 'react';
import { useState } from 'react';

const OpenEditProfileBtn = ({ data }) => {
  const { username, displayname, bio } = data;

  const [get, set] = useState({
    username: '',
    displayname: '',
    bio: '',
  });

  const [isShow, setIsShow] = useState(false);
  const [{ alike, length }, setIsOK] = useState({ alike: true, length: false });

  const { mutate } = useMutateProfileField();

  const toggleDialog = () => {
    setIsShow((prev) => !prev);
    set({
      username: username,
      displayname: displayname,
      bio: bio,
    });
  };

  const onChange = ({ target }) => {
    set((prev) => ({ ...prev, [target.name]: target.value }));
    if (target.value.length < 5) setIsOK((prev) => ({ ...prev, length: true }));
    else setIsOK((prev) => ({ ...prev, length: false }));
  };

  const saveUpdate = () => {
    mutate({
      username: get.username,
      displayname: get.displayname,
      bio: get.bio,
    });
    setIsShow(false);
  };

  useEffect(() => {
    if (
      get.username === username &&
      get.displayname === displayname &&
      get.bio === bio
    ) {
      setIsOK((prev) => ({ ...prev, alike: true }));
    } else setIsOK((prev) => ({ ...prev, alike: false }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get.username, get.displayname, get.bio]);

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
        onClick={toggleDialog}
        startIcon={<BorderColorRoundedIcon />}
      >
        Edit profile
      </Button>

      <Dialog maxWidth="lg" open={isShow} onClose={toggleDialog}>
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
              Edit profile &#40;min 5 each&#41;
            </Typography>
            <IconButton
              sx={{
                width: 30,
                height: 30,
                margin: 2,
                backgroundColor: '#636363',
                cursor: 'pointer',
                color: 'white',
              }}
              onClick={toggleDialog}
            >
              <CloseIcon />
            </IconButton>
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
                  size="small"
                  value={get.username}
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                  inputProps={{ maxLength: 20 }}
                  name="username"
                  onChange={onChange}
                />
                <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
                  Usernames can only contain letters, numbers, underscores, and
                  periods. 5 - 20 characters
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
                Display Name
              </Typography>
              <Box sx={{ width: '300px' }}>
                <TextField
                  size="small"
                  value={get.displayname}
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                  inputProps={{ maxLength: 30 }}
                  name="displayname"
                  onChange={onChange}
                />
                <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
                  Your name should be between 5 and 30 characters
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
                  size="small"
                  multiline
                  value={get.bio}
                  rows={3}
                  sx={{
                    width: '300px',
                    marginBottom: '12px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                  inputProps={{ maxLength: 80 }}
                  name="bio"
                  onChange={onChange}
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
              onClick={toggleDialog}
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
              disabled={alike || length}
              variant="contained"
              onClick={saveUpdate}
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
