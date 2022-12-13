import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import SignupMethod from '../Signup/components/SignupMethod';
import LoginMethod from './components/LoginMethod';

const OpenDialog = () => {
  const [isShow, setIsShow] = useState({
    isLogin: false,
    isSignup: false,
    isShow: false,
  });

  const CloseModal = () => {
    setIsShow({
      isLogin: false,
      isSignup: false,
      isShow: false,
    });
  };

  const handleClickOpen = () => {
    setIsShow({
      isLogin: true,
      isSignup: false,
      isShow: true,
    });
  };

  const handleClose = () => {
    setIsShow({
      isLogin: false,
      isSignup: false,
      isShow: false,
    });
  };

  const handleSignupClickOpen = () => {
    setIsShow({
      isLogin: false,
      isSignup: true,
      isShow: true,
    });
  };

  const handleClickLogin = () => {
    setIsShow({
      isLogin: true,
      isSignup: false,
      isShow: true,
    });
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
      <Dialog open={isShow.isShow}>
        <Box
          sx={{
            height: 600,
            width: 500,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isShow.isLogin && (
            <LoginMethod
              handleClose={handleClose}
              handleSignupClickOpen={handleSignupClickOpen}
            />
          )}
          {isShow.isSignup && (
            <SignupMethod
              handleClickLogin={handleClickLogin}
              handleClose={handleClose}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default OpenDialog;
