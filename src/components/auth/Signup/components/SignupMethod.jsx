import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const SignupMethod = ({
  handleClose,
  handleClickLogin,
  handleClickSignupWithEmail,
}) => {
  return (
    <>
      <Avatar
        sx={{
          width: 30,
          height: 30,
          alignSelf: 'end',
          margin: 2,
          backgroundColor: '#636363',
          cursor: 'pointer',
          color: '#444444',
        }}
        onClick={handleClose}
      >
        <CloseIcon />
      </Avatar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 7,
          paddingRight: 7,
          marginBottom: '65px',
          alignItems: 'center',
          overflow: 'auto',
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
          Sign up for TikTok
        </Typography>
        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid #636363',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
          onClick={() => handleClickSignupWithEmail()}
        >
          <PersonIcon
            color="disabled"
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography sx={{ color: '#cfcfcf' }}>Use Email</Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid #636363',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          <FacebookIcon
            color="primary"
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography sx={{ color: '#cfcfcf' }}>
            Continue with Facebook
          </Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid #636363',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          <TwitterIcon
            color="info"
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography sx={{ color: '#cfcfcf' }}>
            Continue with Twitter
          </Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid #636363',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          <GoogleIcon
            color="success"
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography sx={{ color: '#cfcfcf' }}>
            Continue with Google
          </Typography>
        </Box>
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
          onClick={() => handleClickLogin()}
        >
          Log in
        </Link>
      </Box>
    </>
  );
};

export default SignupMethod;
