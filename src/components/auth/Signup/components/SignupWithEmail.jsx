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
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import SignUpEmail from 'backend/auth/SignUpFunction';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';

const SignupWithEmail = ({
  handleClose,
  handleClickLogin,
  handleClickSignup,
  handleClickSignupWithEmailSuccess,
}) => {
  const supabase = useSupabaseClient();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [birthday, setBirthday] = useState(dayjs('2000-01-01T07:00:01'));
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validInfo, setValidInfo] = useState(true);

  const email = useRef();
  const pass = useRef();
  const repass = useRef();
  const username = useRef();
  const displayname = useRef();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeBirthday = (event) => {
    setBirthday(event);
  };

  const handleClickSignupBtn = async () => {
    setLoading(true);
    setValidEmail(true);
    setValidPassword(true);
    setValidInfo(true);

    if (
      username.current.value.length > 20 ||
      username.current.value.length < 5 ||
      displayname.current.value.length > 30 ||
      displayname.current.value.length < 5
    ) {
      setValidInfo(false);
      setLoading(false);
      return;
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)
    ) {
      setValidEmail(false);
      setLoading(false);
      return;
    }

    if (
      pass.current.value.length < 5 ||
      pass.current.value !== repass.current.value
    ) {
      setValidPassword(false);
      setLoading(false);
      return;
    }

    const rs = await SignUpEmail(
      email.current.value,
      pass.current.value,
      username.current.value,
      displayname.current.value,
      birthday,
      supabase,
    );

    handleClickSignupWithEmailSuccess();
    setLoading(false);
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
          onClick={handleClickSignup}
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
          Sign up
        </Typography>

        <Typography
          sx={{
            color: '#9f9f9f',
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
            color: '#9f9f9f',
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
          inputRef={email}
        />
        <TextField
          sx={{ marginBottom: '12px' }}
          label="User name"
          inputRef={username}
        />
        <TextField
          sx={{ marginBottom: '12px' }}
          label="Display name"
          inputRef={displayname}
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
            inputRef={pass}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: '12px' }} variant="outlined">
          <InputLabel>Re-Password</InputLabel>
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
            inputRef={repass}
          />
        </FormControl>
        {validEmail && validPassword && validInfo ? (
          <></>
        ) : (
          <Typography
            sx={{
              marginTop: '-12px',
              marginBottom: '12px',
              color: '#FE2C55',
            }}
          >
            {!validEmail
              ? 'Invalid email ❌'
              : !validInfo
              ? 'Invalid account infomation ❌'
              : 'Invalid password ❌'}
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
            onClick={handleClickSignupBtn}
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
          onClick={handleClickLogin}
        >
          Log in
        </Link>
      </Box>
    </>
  );
};
export default SignupWithEmail;
