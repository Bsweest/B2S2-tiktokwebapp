import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  Card,
  Dialog,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { runResetPassword } from 'backend/auth/ResetPassword';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const supabase = useSupabaseClient();

  const repass = useRef();
  const pass = useRef();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const resetPass = async () => {
    if (pass.current.value !== repass.current.value) {
      toast.error('Passwords are not matched');
      return;
    }
    const { data, error } = await runResetPassword(
      pass.current.value,
      supabase,
    );

    if (error) {
      alert('There was an error updating your password.');
      return;
    }

    if (data) {
      alert('Password updated successfully!');
      router.push('/');
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'PASSWORD_RECOVERY') {
        setDisplay(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: display ? 'flex' : 'none',
        width: '100%',
        justifyContent: 'center',
      }}
    >
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
              onClick={() => setShowDialog(false)}
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
              onClick={resetPass}
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
