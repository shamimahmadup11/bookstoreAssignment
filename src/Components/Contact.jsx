import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ maxWidth: "lg", my: 3, py: 2 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          If you have any questions, feel free to contact us!
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
