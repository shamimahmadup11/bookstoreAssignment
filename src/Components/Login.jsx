import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

const Login = () => {
  return (
    <Container sx={{ maxWidth: "lg", my: 3, py: 2 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Username" variant="outlined" fullWidth sx={{
                "& .MuiOutlinedInput-root": { height: 40, fontSize: 14 },
                "& .MuiInputLabel-root": { fontSize: 12 },
              }} />
          <TextField label="Password" type="password" variant="outlined" fullWidth sx={{
                "& .MuiOutlinedInput-root": { height: 40, fontSize: 14 },
                "& .MuiInputLabel-root": { fontSize: 12 },
              }} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
