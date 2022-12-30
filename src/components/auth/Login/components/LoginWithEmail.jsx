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
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import LogIn from 'backend/auth/LoginFunction';
import { useRef, useState } from 'react';

const LoginWithEmail = ({
  handleClose,
  handleClickSignup,
  handleClickLogin,
  handleClickResetPassword,
}) => {
  const supabase = useSupabaseClient();

  const email = useRef();
  const pass = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clickSignin = async () => {
    setLoading(true);
    const rs = await LogIn(email.current.value, pass.current.value, supabase);
    setLoading(false);
    if (rs) setValid(false);
  };

  const onEnterUsername = ({ code }) => {
    if (code === 'Enter') pass.current.focus();
  };
  const onEnterPass = ({ code }) => {
    if (code === 'Enter') clickSignin();
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
            color: '#cfcfcf',
          }}
          onClick={handleClickLogin}
        />
        <Avatar
          sx={{
            width: 30,
            height: 30,
            margin: 2,
            backgroundColor: '#636363',
            cursor: 'pointer',
            color: '#444444',
          }}
          onClick={handleClose}
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
          inputRef={email}
          sx={{ marginBottom: '12px' }}
          onKeyDown={onEnterUsername}
          label="Email Address"
        />
        <FormControl sx={{ marginBottom: '4px' }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            inputRef={pass}
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
            onKeyDown={onEnterPass}
            label="Password"
          />
        </FormControl>
        {valid ? (
          <></>
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
          onClick={handleClickResetPassword}
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
            onClick={clickSignin}
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
          onClick={handleClickSignup}
        >
          Sign up
        </Link>
      </Box>
    </>
  );
};

export default LoginWithEmail;
