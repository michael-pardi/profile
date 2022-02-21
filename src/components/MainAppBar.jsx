import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Profile', 'Fun Stuff'];
const routes = ['profile', 'fun'];

const MainAppBar = ({pageSetter}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#cd5c5c',
      },
    },
  });

  const setPage = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === pages[1]) {
      pageSetter(false);
    } else {
      pageSetter(true);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
            >
                Michael Pardi
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                    key={page}
                    onClick={setPage}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default MainAppBar;
