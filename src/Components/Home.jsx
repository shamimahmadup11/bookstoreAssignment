import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Grid,
  Box,
  Divider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Home = () => {
  const data = useSelector((state) => state.data.value);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const filterBySearch = (books) => {
    return books.filter((book) => {
      const matchesTitle =
        searchTitle === "" ||
        book.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesAuthor =
        searchAuthor === "" ||
        book.author.toLowerCase().includes(searchAuthor.toLowerCase());
      const matchesCategory =
        searchCategory === "" ||
        book.category.toLowerCase().includes(searchCategory.toLowerCase());

      return matchesTitle && matchesAuthor && matchesCategory;
    });
  };

  const filterByPrice = (books) => {
    if (!priceRange) return books;
    return books.filter((book) => {
      if (priceRange === "below15") return book.price < 15;
      if (priceRange === "15to30") return book.price >= 15 && book.price <= 30;
      if (priceRange === "above30") return book.price > 30;
      return true;
    });
  };

  const filteredData = filterByPrice(filterBySearch(data));

  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container sx={{ width: "100%", maxWidth: "1200px", my: 3, boxShadow: 2, py: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Explore Our Product
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        {[
          { label: "Search by Title", value: searchTitle, onChange: setSearchTitle },
          { label: "Search by Author", value: searchAuthor, onChange: setSearchAuthor },
          { label: "Search by Category", value: searchCategory, onChange: setSearchCategory },
        ].map((field, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TextField
              fullWidth
              label={field.label}
              variant="outlined"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": { height: 40, fontSize: 14 },
                "& .MuiInputLabel-root": { fontSize: 12 },
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {/* Sidebar Filters */}
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                label="Price Range"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="below15">Below 15</MenuItem>
                <MenuItem value="15to30">15 - 30</MenuItem>
                <MenuItem value="above30">Above 30</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Book Cards with Slider */}
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={2}>
            {paginatedData.length > 0 ? (
              paginatedData.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.id}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      alt={book.title}
                      height="140"
                      image={book.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div" noWrap>
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        Author: {book.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        Category: {book.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        Price: ${book.price}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ padding: 1, justifyContent: "space-between" }}>
                      <Button size="small" variant="outlined" sx={{ fontSize: 12 }}>
                        Add to Cart
                      </Button>
                      <Button size="small" variant="contained" color="primary" sx={{ fontSize: 12 }}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="text.secondary" sx={{ marginTop: 4 }}>
                No books match the selected filters.
              </Typography>
            )}
          </Grid>

          {/* Pagination Controls */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <IconButton onClick={handlePrev} disabled={currentPage === 0}>
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={(currentPage + 1) * itemsPerPage >= filteredData.length}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
