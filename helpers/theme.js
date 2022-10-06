import { createTheme, css } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#062C30" },
    secondary: { main: "#05595B" },
    background: { main: '#fff' },
    color: { main: '#000' },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#EAF6F6" },
    secondary: { main: "#a82927" },
    background: { main: '#000' },
    color: { main: '#fff' },
    mode: "dark",
  },
});

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