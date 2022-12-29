import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
import { supabase } from 'backend/supabase';
import { useState } from 'react';

const ResetPassword = ({
  handleClose,
  handleClickSignup,
  handleClickLoginWithEmail,
  //   handleClickLoginWithEmailSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  async function resetPassword() {
    try {
      setLoading(true);
      const result = await supabase.auth.resetPasswordForEmail(
        'laophan74@gmail.com',
      );
      setLoading(false);
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
          onClick={() => handleClickLoginWithEmail()}
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
          Reset password
        </Typography>
        <Typography
          sx={{
            color: '#9f9f9f',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
          }}
        >
          Enter email address
        </Typography>

        <TextField
          sx={{ marginBottom: '12px' }}
          label="Email Address"
          value={email}
          onChange={handleChangeEmail}
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
          onClick={() => resetPassword()}
        >
          Log in
        </Button>
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

export default ResetPassword;
