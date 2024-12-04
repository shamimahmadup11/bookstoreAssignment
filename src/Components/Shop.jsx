import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Shop = () => {
  return (
    <Container sx={{ maxWidth: "lg", my: 3, py: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Product 1</Typography>
            <Typography variant="body1">$29.99</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Product 2</Typography>
            <Typography variant="body1">$39.99</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Product 3</Typography>
            <Typography variant="body1">$49.99</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
