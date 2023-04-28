import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#64EEBC',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
  },
});

export default theme;