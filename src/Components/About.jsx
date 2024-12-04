import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ maxWidth: "lg", my: 3, py: 2 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Welcome to our website! We are committed to providing the best service and products to our customers.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
