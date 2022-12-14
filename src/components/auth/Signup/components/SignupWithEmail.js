import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const SignupWithEmail = ({
  handleClose,
  handleClickLogin,
  handleClickSignup,
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
                // eslint-disable-next-line react/jsx-key
                <MenuItem value={day}>{day}</MenuItem>
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
                // eslint-disable-next-line react/jsx-key
                <MenuItem value={year}>{year}</MenuItem>
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
