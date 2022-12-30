import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';

const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const email = useRef();
  const currentpass = useRef();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      <Card sx={{ width: '1000px', margin: '10px', padding: '30px' }}>
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
          Setting
        </Typography>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#cfcfcf',
            marginBottom: '15px',
          }}
        >
          Change password
        </Typography>
        <Box>
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
              label="Current password"
              inputRef={currentpass}
            />
          </FormControl>
        </Box>
      </Card>
    </Box>
  );
};

export default Setting;
