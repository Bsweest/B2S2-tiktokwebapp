import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Avatar, Button, Dialog, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const OpenDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          marginRight: 1,
          width: 125,
          color: 'white',
          backgroundColor: '#FE2C55',
          fontWeight: 'bold',
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Log In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            height: 600,
            width: 500,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar
            vatar
            sx={{
              width: 30,
              height: 30,
              alignSelf: 'end',
              margin: 2,
              backgroundColor: '#eeeeee',
              cursor: 'pointer',
              color: '#444444',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Avatar>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 7,
              paddingRight: 7,
              marginBottom: '65px',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#161823',
                marginBottom: '10px',
              }}
            >
              Log in to TikTok
            </Typography>
            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>User phone/ Email/ username</Typography>
            </Box>

            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>Continue with Facebook</Typography>
            </Box>

            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>Continue with Facebook</Typography>
            </Box>

            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>Continue with Facebook</Typography>
            </Box>

            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>Continue with Facebook</Typography>
            </Box>

            <Box
              sx={{
                height: 44,
                width: '100%',
                border: '1px solid lightgray',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <PersonOutlineIcon
                sx={{
                  left: '12px',
                  position: 'absolute',
                }}
              />
              <Typography>Continue with Facebook</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              height: 65,
              width: '100%',
              borderTop: '1px solid lightgray',
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: 15,
                color: '#444444',
              }}
            >
              Dont have an account?
            </Typography>
            <Link
              sx={{
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                marginLeft: 1,
                color: '#f44336',
              }}
            >
              Sign up
            </Link>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default OpenDialog;
