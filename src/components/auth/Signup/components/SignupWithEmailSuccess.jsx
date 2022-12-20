import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
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
          Sign up
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            color: '#9f9f9f',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          The confirmation has been sent to your email!
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            color: '#9f9f9f',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Please check your email and follow the link to confirm
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
      </Box>
    </>
  );
};

export default SignupWithEmailSuccess;
