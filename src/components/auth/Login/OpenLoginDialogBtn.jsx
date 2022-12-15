import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import SignupMethod from '../Signup/components/SignupMethod';
import SignupWithEmail from '../Signup/components/SignupWithEmail';
import SignupWithEmailSuccess from '../Signup/components/SignupWithEmailSuccess';
import LoginMethod from './components/LoginMethod';

const OpenDialog = () => {
  const [isShow, setIsShow] = useState({
    isLogin: false,
    isSignup: false,
    isShow: false,
    isSignupWithEmail: false,
    isSignupWithEmailSuccess: false,
  });

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
      isSignupWithEmail: false,
      isSignupWithEmailSuccess: false,
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
      isSignupWithEmailSuccess: false,
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

  const handleClickSignupWithEmailSuccess = () => {
    setIsShow({
      isLogin: false,
      isSignup: false,
      isShow: true,
      isSignupWithEmail: false,
      isSignupWithEmailSuccess: true,
    });
  };

  return (
    <>
      <Button
        sx={{
          marginRight: 1,
          width: 125,
          fontWeight: 'bold',
        }}
        color="error"
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
              handleClickSignupWithEmailSuccess={
                handleClickSignupWithEmailSuccess
              }
            />
          )}
          {isShow.isSignupWithEmailSuccess && (
            <SignupWithEmailSuccess
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
