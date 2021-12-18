import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './Layout/Header/ResponsiveAppBar';
import MainBody from './Layout/Content/MainBody';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar/>
        <MainBody/>
        </ThemeProvider>
    </div>
  );
}

export default App;
