import OpenDialog from '@/components/auth/Login/OpenLoginDialogBtn';
import { muiTheme } from '@/styles/muiStyles';
import '@fontsource/varela-round';
import Search from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';

import SetupClient from './global/ClientData';

const Main = ({ children }) => {
  const user = useUser();

  SetupClient(user);

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box
          className="flex col"
          sx={{
            flex: 1,
            position: 'relative',
          }}
        >
          <AppBar
            position="relative"
            className="flex row"
            sx={{
              height: '60px',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 0,
              backgroundColor: '#030303',
              paddingLeft: '35px',
              paddingRight: '35px',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image alt="logo" src="/img/logo.svg" width={45} height={45} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  marginLeft: 2,
                  fontFamily: 'cursive',
                  backgroundcolor: 'primary',
                  backgroundImage: `linear-gradient(180deg, #CA2D73, #411D9E)`,
                  backgroundSize: '100%',
                  backgroundRepeat: 'repeat',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                B2S2
              </Typography>
            </Box>

            <SearchContainer>
              <SearchIconWrapper>
                <Search style={{ color: 'gray' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: 'gray' }}
                fullWidth
              />
            </SearchContainer>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '25px',
              }}
            >
              <OpenDialog />
            </Box>
          </AppBar>

          <main>{children}</main>
        </Box>
      </ThemeProvider>
    </>
  );
};

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid #333',
  borderRadius: '2rem',
  backgroundColor: '#0f0f0f',
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
