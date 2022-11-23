import { createTheme } from '@mui/material';
import { cyan, blue } from '@mui/material/colors';

export const TemaPrincipal = createTheme({
  palette: {
    primary: {
      main: '#495152',
      dark: '#007888',
      light:'#007888',
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#cfe8fc',
    },
  },
});
