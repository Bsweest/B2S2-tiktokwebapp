import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import SignupMethod from '../Signup/components/SignupMethod';
import SignupWithEmail from '../Signup/components/SignupWithEmail';
import LoginMethod from './components/LoginMethod';

const OpenDialog = () => {
  const [isShow, setIsShow] = useState({
    isLogin: false,
    isSignup: false,
    isShow: false,
  });

  const handleClickOpen = () => {
    setIsShow({
      isLogin: true,
      isSignup: false,
      isShow: true,
      isSignupWithEmail: false,
    });
  };

  const handleClose = () => {
    setIsShow({
      isLogin: false,
      isSignup: false,
      isShow: false,
    });
  };

  const handleClickSignup = () => {
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
      isSignupWithEmail: false,
    });
  };

  const handleClickSignupWithEmail = () => {
    setIsShow({
      isLogin: false,
      isSignup: false,
      isShow: true,
      isSignupWithEmail: true,
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
        onClick={() => handleClickOpen()}
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
              handleClickSignup={handleClickSignup}
            />
          )}
          {isShow.isSignup && (
            <SignupMethod
              handleClickLogin={handleClickLogin}
              handleClose={handleClose}
              handleClickSignupWithEmail={handleClickSignupWithEmail}
            />
          )}
          {isShow.isSignupWithEmail && (
            <SignupWithEmail
              handleClickLogin={handleClickLogin}
              handleClose={handleClose}
              handleClickSignup={handleClickSignup}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default OpenDialog;
