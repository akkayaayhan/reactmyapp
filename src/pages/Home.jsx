
import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

const projects = [
  {
    title: 'Project 1',
    description: 'A short description of the project. This could be about the technologies used or the problem it solves.',
  },
  {
    title: 'Project 2',
    description: 'A short description of the project. This could be about the technologies used or the problem it solves.',
  },
  {
    title: 'Project 3',
    description: 'A short description of the project. This could be about the technologies used or the problem it solves.',
  },
];

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 10,
            textAlign: 'center',
          }}
        >
          <Container>
            <Typography variant="h1" gutterBottom>
              akkayasoft
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Full Stack Developer | React Enthusiast
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
              Contact Me
            </Button>
          </Container>
        </Box>

        {/* Projects Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Source</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          sx={{
            bgcolor: '#f5f5f5',
            color: '#333',
            py: 3,
            textAlign: 'center',
            position: 'relative',
            bottom: 0,
            width: '100%'
          }}
        >
          <Container>
            <Typography variant="body2">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
