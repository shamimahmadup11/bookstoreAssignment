import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Catagory = () => {
  return (
    <Container sx={{ maxWidth: "lg", my: 3, py: 2 }}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Category 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Category 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Category 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catagory;
