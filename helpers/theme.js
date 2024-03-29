import { createTheme, css } from '@mui/material/styles';
export const lightTheme = createTheme({
  palette: {
    primary: { main: "#134E5E" },
    // secondary: { main: "#1A7A3A" },
    secondary: { main: "#71B280" },

    background: { main: '#fff' },
    color: { main: '#000' },
    mode: "light",
  },
  typography: {
    fontSize: 14,
    fontWeightBold: true,
    fontFamily: 'Noto Sans Mono',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans Mono';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#615AF7" },
    secondary: { main: "#a82927" },
    background: { main: '#000' },
    color: { main: '#fff' },
    mode: "dark",
  },
  typography: {
    fontSize: 14,
    fontWeightBold: true,
    fontFamily: 'Noto Sans Mono',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Noto Sans Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `,
    },
  },
});

lightTheme.typography.h3 = {
  fontSize: '1.2rem',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
lightTheme.typography.h4 = {
  fontSize: '1rem',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
lightTheme.typography.h6 = {
  fontSize: '0.8rem',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};
lightTheme.typography.h5 = {
  fontSize: '1rem',
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

darkTheme.typography.h3 = {
  fontSize: '1.2rem',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
darkTheme.typography.h4 = {
  fontSize: '1rem',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
darkTheme.typography.h5 = {
  fontSize: '1rem',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};
darkTheme.typography.h6 = {
  fontSize: '0.8rem',
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

export const globalStyles = css`
  :root {
    body {
      background-color: #EFEFEF;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;