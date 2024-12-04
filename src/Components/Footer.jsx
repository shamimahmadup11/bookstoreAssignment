
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 40px",
        marginTop: "20px",
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are dedicated to providing the best selection of books at
            affordable prices. Explore a wide variety of categories and genres
            tailored to suit your interests.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="#" underline="none" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="#" underline="none" color="inherit" display="block" sx={{ mb: 1 }}>
              Categories
            </Link>
            <Link href="#" underline="none" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact Us
            </Link>
            <Link href="#" underline="none" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
          </Box>
        </Grid>

        {/* Contact & Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Email: support@bookstore.com
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Phone: +1 (555) 123-4567
          </Typography>
          <Box>
            <IconButton href="#" color="primary">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="primary">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="primary">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="primary">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #ddd",
          marginTop: "20px",
          paddingTop: "10px",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Bookstore. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
