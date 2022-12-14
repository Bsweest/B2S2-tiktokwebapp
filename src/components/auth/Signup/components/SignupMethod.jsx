import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const SignupMethod = ({ handleClose, handleClickLogin }) => {
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
            color: '#161823',
            marginBottom: '10px',
          }}
        >
          Sign up to TikTok
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
        >
          <PersonOutlineIcon
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography>User phone/ Email/ username</Typography>
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
          <PersonOutlineIcon
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
          <PersonOutlineIcon
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
          <PersonOutlineIcon
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
          <PersonOutlineIcon
            sx={{
              left: '12px',
              position: 'absolute',
            }}
          />
          <Typography>Continue with Facebook</Typography>
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

export default SignupMethod;
