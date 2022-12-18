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
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const SignupWithEmail = ({
  handleClose,
  handleClickLogin,
  handleClickSignup,
  handleClickSignupWithEmailSuccess,
}) => {
  const [day, setDay] = useState('');

  const [month, setMonth] = useState('');

  const [year, setYear] = useState('');

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const dayOfMonth = [];
  for (let index = 1; index < 32; index++) {
    dayOfMonth.push(index);
  }

  const allYear = [];
  for (let index = 1900; index < 2022; index++) {
    allYear.push(index);
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            color: '#444444',
          }}
          onClick={() => handleClickSignup()}
        />
        <Avatar
          vatar
          sx={{
            width: 30,
            height: 30,
            margin: 2,
            backgroundColor: '#eeeeee',
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
            color: '#161823',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Sign up
        </Typography>

        <Typography
          sx={{
            color: '#161823',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
          }}
        >
          When is your birthday?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '4px',
            justifyContent: 'space-between',
            marginBottom: '35px',
          }}
        >
          <FormControl
            sx={{
              width: 120,
              height: 44,
            }}
          >
            <InputLabel>Day</InputLabel>
            <Select value={day} label="Day" onChange={handleChangeDay}>
              {dayOfMonth.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: 120,
              height: 44,
            }}
          >
            <InputLabel>Month</InputLabel>
            <Select value={month} label="Month" onChange={handleChangeMonth}>
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>Febuary</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>Jun</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: 120,
              height: 44,
            }}
          >
            <InputLabel>Year</InputLabel>
            <Select value={year} label="year" onChange={handleChangeYear}>
              {allYear.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Typography
          sx={{
            color: '#161823',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: '4px',
          }}
        >
          Email
        </Typography>
        <TextField sx={{ marginBottom: '12px' }} label="Email Address" />
        <TextField sx={{ marginBottom: '12px' }} label="User name" />
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
        <FormControl sx={{ marginBottom: '12px' }} variant="outlined">
          <InputLabel>Enter 6 digit code</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <Button
                sx={{
                  width: 200,
                  height: '100%',
                  textTransform: 'none',
                  color: '#161823',
                  fontWeight: 'bold',
                  margin: '-13px',
                }}
                variant="text"
              >
                Send code
              </Button>
            }
            label="Enter 6 digit code"
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
          onClick={() => handleClickSignupWithEmailSuccess()}
        >
          Next
        </Button>
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

export default SignupWithEmail;
