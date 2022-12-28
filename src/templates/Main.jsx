import OpenDialog from '@/components/auth/Login/OpenLoginDialogBtn';
import SearchBar from '@/components/userheader/SearchBar';
import { muiTheme } from '@/styles/muiStyles';
import '@fontsource/varela-round';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import Link from 'next/link';

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
              <Link href="/">
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
              </Link>
            </Box>

            <SearchBar />

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '20px',
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

export default Main;
