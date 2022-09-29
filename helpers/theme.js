import { createTheme, css } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#2a48f3" },
    secondary: { main: "#9147FF" },
    background: { main: '#fff' },
    color: { main: '#000' },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    background: { main: '#000' },
    color: { main: '#fff' },
    mode: "dark",
  },
});

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
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