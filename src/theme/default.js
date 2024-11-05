import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { shadows } from "./shadows";
import { sfpro } from '@/fonts';

// import { Roboto_Slab } from 'next/font/google';

// export const inter = Roboto_Slab({
//     weight: ['400', '500', '600', '700'],
//     subsets: ['latin'],
//     display: 'swap',
//     fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A4996',
    },
    secondary: {
      main: '#FFE4C4',
    },
    error: {
      main: red.A400,
    },
    gray: {
      main: '#aaaaaa'
    },
    white: {
      main: '#ffffff'
    },
    midBlack: {
      main: '#333'
    }
  },
  typography: {
    fontFamily: sfpro.style.fontFamily,
    body1: {
      fontSize: '15px',
      lineHeight: 1.5
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5
    },
    h1: {
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h2: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h3: {
      fontSize: '18px',
      lineHeight: 1.5
    }
  },
  shadows,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#222'
        }
      },
    },
  },
});

export default theme;
