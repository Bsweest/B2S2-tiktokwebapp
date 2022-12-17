import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const SignupWithEmailSuccess = ({ handleClose, handleClickLogin }) => {
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
          Sign up success!
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            color: '#161823',
            marginBottom: '10px',
          }}
        >
          You have successfully created an account
        </Typography>

        <Box
          sx={{
            height: 65,
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              color: '#444444',
            }}
          >
            Log in now?
          </Typography>
          <Link
            sx={{
              fontWeight: 600,
              fontSize: 25,
              cursor: 'pointer',
              marginLeft: 1,
              color: '#f44336',
            }}
            onClick={() => handleClickLogin()}
          >
            Log in
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default SignupWithEmailSuccess;
