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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useState } from 'react';

import { supabase } from '../../../../../backend/supabase';

const SignupWithEmail = ({
  handleClose,
  handleClickLogin,
  handleClickSignup,
  handleClickSignupWithEmailSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [birthday, setBirthday] = useState(dayjs('2000-01-01T07:00:01'));
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

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

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeBirthday = (event) => {
    setBirthday(event);
  };

  const handleClickSignupBtn = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidEmail(true);
      if (password.length > 5) {
        setValidPassword(true);
        signUp();
      } else {
        setValidPassword(false);
      }
    } else {
      setValidEmail(false);
    }
  };

  async function signUp() {
    try {
      setLoading(true);
      const result = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      setLoading(false);
      if (result.data.user) {
        setLoading(true);
        const userData = result.data.user;
        await supabase.from('profiles').insert({
          id: userData.id,
          created_at: userData.created_at,
          username: username,
          displayname: email,
          birth: birthday,
        });
        setLoading(false);
        handleClickSignupWithEmailSuccess();
      }
    } catch (error) {
      console.log(error);
    }
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
            color: '#444444',
          }}
          onClick={() => handleClickSignup()}
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
          Sign up
        </Typography>

        <Typography
          sx={{
            color: '#161823',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
          }}
        >
          When is your birthday?
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={birthday}
            inputFormat="MM/DD/YYYY"
            onChange={handleChangeBirthday}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Typography
          sx={{
            color: '#161823',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
            marginTop: '4px',
          }}
        >
          Email
        </Typography>
        <TextField
          sx={{ marginBottom: '12px' }}
          label="Email Address"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField
          sx={{ marginBottom: '12px' }}
          label="User name"
          value={username}
          onChange={handleChangeUsername}
        />
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
            value={password}
            onChange={handleChangePassword}
          />
        </FormControl>
        {validEmail && validPassword ? (
          <Box />
        ) : (
          <Typography
            sx={{
              marginTop: '-12px',
              marginBottom: '12px',
              color: '#FE2C55',
            }}
          >
            {validEmail ? 'Invalid password ❌' : 'Invalid email ❌'}
          </Typography>
        )}
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
            onClick={() => handleClickSignupBtn()}
          >
            Next
          </Button>
        )}
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
          Already have an account?
        </Typography>
        <Link
          sx={{
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            marginLeft: 1,
            color: '#f44336',
          }}
          onClick={() => handleClickLogin()}
        >
          Log in
        </Link>
      </Box>
    </>
  );
};
export default SignupWithEmail;
