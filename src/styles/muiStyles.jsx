import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    error: { main: '#EA4359' },
  },
  typography: {
    subtitle1: {
      color: '#71767B',
    },
    subtitle2: {
      color: '#898989',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: '1rem',
        fontFamily: 'Varela Round',
      },
    },
    MuiTooltip: {
      defaultProps: {
        fontFamily: 'Varela Round',
      },
    },
  },
});

export { muiTheme };
