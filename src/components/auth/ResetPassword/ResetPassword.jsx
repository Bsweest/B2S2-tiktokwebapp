import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const ResetPassword = ({
  handleClose,
  handleClickSignup,
  handleClickLoginWithEmail,
  //   handleClickLoginWithEmailSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            color: '#444444',
          }}
          onClick={() => handleClickLoginWithEmail()}
        />
        <Avatar
          vatar
          sx={{
            width: 30,
            height: 30,
            margin: 2,
            backgroundColor: '#eeeeee',
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
            color: '#161823',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Reset password
        </Typography>
        <Typography
          sx={{
            color: '#161823',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
          }}
        >
          Enter email address
        </Typography>
        <TextField sx={{ marginBottom: '12px' }} label="Email Address" />
        <FormControl sx={{ marginBottom: '12px' }} variant="outlined">
          <InputLabel>Enter 6 digit code</InputLabel>
          <OutlinedInput
            endAdornment={
              <Button
                sx={{
                  width: 200,
                  height: '100%',
                  textTransform: 'none',
                  color: '#161823',
                  fontWeight: 'bold',
                  margin: '-13px',
                }}
                variant="text"
              >
                Send code
              </Button>
            }
            label="Enter 6 digit code"
          />
        </FormControl>
        <FormControl sx={{ marginBottom: '12px' }} variant="outlined">
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
          />
        </FormControl>
        <Button
          sx={{
            marginBottom: '4px',
            textTransform: 'none',
            p: '12px',
            backgroundColor: '#FE2C55',
          }}
          variant="contained"
        >
          Log in
        </Button>
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
          backgroundColor: 'white',
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            color: '#444444',
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

export default ResetPassword;
