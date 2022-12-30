import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { sendResetPassword } from 'backend/auth/ResetPassword';
import { useRef } from 'react';
import { useState } from 'react';

const ResetPassword = ({
  handleClose,
  handleClickSignup,
  handleClickLoginWithEmail,
  //   handleClickLoginWithEmailSuccess,
}) => {
  const [isLoading, setLoading] = useState(false);
  const email = useRef();
  const supabase = useSupabaseClient();

  const resetPassword = async () => {
    setLoading(true);
    await sendResetPassword(email.current.value, supabase);
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
          onClick={handleClickLoginWithEmail}
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
          Forget password
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
          inputRef={email}
        />
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
            onClick={resetPassword}
          >
            Send
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

export default ResetPassword;
