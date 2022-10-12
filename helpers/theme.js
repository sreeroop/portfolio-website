import { createTheme, css } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#1FAC3F" },
    secondary: { main: "#05595B" },
    background: { main: '#fff' },
    color: { main: '#000' },
    mode: "light",
  },
  typography: {
    fontSize: 14,
    fontWeightBold: true
  }
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#615AF7" },
    secondary: { main: "#a82927" },
    background: { main: '#000' },
    color: { main: '#fff' },
    mode: "dark",
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