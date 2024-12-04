import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const LandingPage = () => {
  return (
    <Container sx={{ width: "100%", my: 3, py: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=sVkVRw7LMHXr5lJLanrub-oGCompIQPeWbElq4E89G8=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "50vh", sm: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
            color: "black",
          }}
        >
          Unleash the Power of Reading
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem" },
            color: "black",
          }}
        >
          "A book is a dream that you hold in your hands. Explore the magic
          of books with us."
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ mt: 2 }}
        >
          Start Your Journey
        </Button>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          About Our Collection
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
        >
          Discover books that inspire, educate, and entertain. From timeless
          classics to the latest releases, we offer a curated selection that
          caters to every reader. Let your imagination soar as you dive into the
          world of stories, knowledge, and adventure.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Container>

      {/* Featured Categories Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: "bold" }}
        >
          Explore Our Categories
        </Typography>
        <Grid container spacing={4}>
          {[ 
            {
              title: "Fiction",
              image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
            },
            {
              title: "Science",
              image:
                "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "History",
              image:
                "https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=sVkVRw7LMHXr5lJLanrub-oGCompIQPeWbElq4E89G8=",
            },
            {
              title: "Children",
              image:
                "https://media.istockphoto.com/id/1856166902/photo/educational-knowledge-and-business-education-ideas-glowing-light-bulb-on-a-book-inspiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=4iu9sy5PQzgSwlDcttZcdJRu6mFxWpIvYjs_HuD-oqE=",
            },
          ].map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {category.title}
                  </Typography>
                  <Button variant="outlined" size="small" color="primary">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default LandingPage;
