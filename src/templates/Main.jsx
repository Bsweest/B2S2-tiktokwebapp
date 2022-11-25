import Add from '@mui/icons-material/Add';
import Search from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

const Main = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ height: 65, justifyContent: 'space-evenly' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', sm: 'block' },
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          B2S2
        </Typography>

        <SearchContainer>
          <SearchIconWrapper>
            <Search style={{ color: 'gray' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'black' }}
          />
        </SearchContainer>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            sx={{
              marginRight: 1,
              width: 125,
              color: 'gray',
              borderColor: 'lightgray',
            }}
            variant="outlined"
            startIcon={<Add />}
          >
            Upload
          </Button>

          <Button
            sx={{
              marginRight: 1,
              width: 125,
              color: 'white',
              backgroundColor: '#FE2C55',
              fontWeight: 'bold',
            }}
            variant="contained"
          >
            Log In
          </Button>
        </Box>
      </Toolbar>

      <Box sx={{ display: 'flex' }}>{props.children}</Box>
    </Box>
  );
};

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid darkgray',
  borderRadius: 5,
  backgroundColor: 'whitesmoke',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default Main;
