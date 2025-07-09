import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  CssBaseline,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CloudIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Deployment Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Version 1!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is a simple application to demonstrate various deployment
              strategies for AZ-400.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button variant="contained">Get Started</Button>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;
