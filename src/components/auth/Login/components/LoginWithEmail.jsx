import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { supabase } from '../../../../../backend/supabase';

const LoginWithEmail = ({
  handleClose,
  handleClickSignup,
  handleClickLogin,
  handleClickResetPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  async function logIn() {
    try {
      setLoading(true);
      const result = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setLoading(false);
      if (result.error) {
        setValid(false);
      } else {
        setValid(true);
        window.localStorage.setItem('userId', result.data.user.id);
        location.reload();
        //render Main Screen
      }
    } catch (error) {}
  }
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ArrowBackIosIcon
          sx={{
            width: 20,
            height: 20,
            margin: 2,
            cursor: 'pointer',
            color: '#cfcfcf',
          }}
          onClick={() => handleClickLogin()}
        />
        <Avatar
          vatar
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
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 7,
          paddingRight: 7,
          marginBottom: '65px',
          overflow: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#cfcfcf',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Log in
        </Typography>

        <TextField
          sx={{ marginBottom: '12px' }}
          label="Email Address"
          value={email}
          onChange={handleChangeEmail}
        />
        <FormControl sx={{ marginBottom: '4px' }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </FormControl>
        {valid ? (
          <Box />
        ) : (
          <Typography
            sx={{
              marginBottom: '12px',
              color: '#FE2C55',
            }}
          >
            Invalid information ❌
          </Typography>
        )}
        <Link
          sx={{
            marginBottom: '14px',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            color: '#f44336',
          }}
          onClick={() => handleClickResetPassword()}
        >
          Forgot passsword
        </Link>

        {isLoading ? (
          <LoadingButton
            sx={{
              marginBottom: '4px',
              textTransform: 'none',
              p: '12px',
              color: '#161823',
            }}
            loading
          >
            Submit
          </LoadingButton>
        ) : (
          <Button
            sx={{
              marginBottom: '4px',
              textTransform: 'none',
              p: '12px',
              backgroundColor: '#FE2C55',
            }}
            variant="contained"
            onClick={() => logIn()}
          >
            Next
          </Button>
        )}
      </Box>

      <Box
        sx={{
          height: 65,
          width: '100%',
          borderTop: '1px solid #a4a4a4',
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
            color: '#a4a4a4',
          }}
        >
          Do not have an account?
        </Typography>
        <Link
          sx={{
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            marginLeft: 1,
            color: '#f44336',
          }}
          onClick={() => handleClickSignup()}
        >
          Sign up
        </Link>
      </Box>
    </>
  );
};

export default LoginWithEmail;
