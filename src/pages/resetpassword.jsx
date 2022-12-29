import { Visibility, VisibilityOff } from '@mui/icons-material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  Dialog,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { supabase } from 'backend/supabase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [hash, setHash] = useState(null);
  const supabase = useSupabaseClient();

  const repass = useRef();
  const pass = useRef();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setHash(
      window.location.hash
        .substring(1)
        .split('&')
        .map((param) => param.split('=')),
    );
  }, []);

  async function resetPassword() {
    let type;
    let accessToken;
    setLoading(true);
    // for (const [key, value] of hash) {
    //   if (key === 'type') type = value;
    //   else if (key === 'access_token') accessToken = value;
    // }
    // if (type !== 'recovery' || !accessToken || typeof accessToken === 'object')
    //   console.log(aaaaaa);

    // const a = await supabase.auth.updateUser(accessToken, {
    //   password: '123456',
    // });
    const a = await supabase.auth.updateUser(hash[0][1], {
      password: '123456',
    });
    // const a = await supabase.auth.update({ password: '1234567' });
    console.log(hash[0][1]);
    console.log(a);
    setLoading(false);
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Dialog open={showDialog}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 60px 40px 60px',
            marginBottom: '65px',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#cfcfcf',
              marginBottom: '10px',
            }}
          >
            Change password
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              color: '#9f9f9f',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Your password has been changed successfully
          </Typography>

          <TaskAltIcon
            sx={{
              marginTop: '70px',
              width: '150px',
              height: '150px',
              color: 'green',
            }}
          />
          <Box
            sx={{
              height: 65,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                textTransform: 'none',
                p: '6px',
                backgroundColor: '#FE2C55',
                '&:hover': {
                  backgroundColor: '#a80022',
                },
                color: 'white',
                width: '100px',
              }}
              variant="contained"
              onClick={() => {
                setShowDialog(false);
              }}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Dialog>
      <Card sx={{ width: '500px', margin: '10px', padding: '30px' }}>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#cfcfcf',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '1px solid #9f9f9f',
          }}
        >
          Change password
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#cfcfcf',
              marginBottom: '15px',
            }}
          >
            Password
          </Typography>
          <FormControl
            sx={{ marginBottom: '12px', width: '100%' }}
            variant="outlined"
          >
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
              inputRef={pass}
            />
          </FormControl>

          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#cfcfcf',
              marginBottom: '15px',
            }}
          >
            Retype password
          </Typography>
          <FormControl
            sx={{ marginBottom: '12px', width: '100%' }}
            variant="outlined"
          >
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
              inputRef={repass}
            />
          </FormControl>

          {loading ? (
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
                marginTop: '12px',
                textTransform: 'none',
                p: '12px',
                backgroundColor: '#FE2C55',
              }}
              variant="contained"
              onClick={() => resetPassword()}
            >
              Save
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default ResetPassword;
