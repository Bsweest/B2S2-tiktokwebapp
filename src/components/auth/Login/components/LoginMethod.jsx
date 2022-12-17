import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const LoginMethod = ({
  handleClose,
  handleClickSignup,
  handleClickLoginWithEmail,
}) => {
  return (
    <>
      <Avatar
        vatar
        sx={{
          width: 30,
          height: 30,
          alignSelf: 'end',
          margin: 2,
          backgroundColor: '#eeeeee',
          cursor: 'pointer',
          color: '#444444',
        }}
        onClick={() => handleClose()}
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
            color: '#161823',
            marginBottom: '10px',
          }}
        >
          Log in to TikTok
        </Typography>
        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid lightgray',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
          onClick={() => handleClickLoginWithEmail()}
        >
          <PersonIcon
            color="action"
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography>Email/ username</Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid lightgray',
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
          <Typography>Continue with Facebook</Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid lightgray',
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
          <Typography>Continue with Twitter</Typography>
        </Box>

        <Box
          sx={{
            height: 44,
            width: '100%',
            border: '1px solid lightgray',
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
          <Typography>Continue with Google</Typography>
        </Box>
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
          Dont have an account?
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

export default LoginMethod;
