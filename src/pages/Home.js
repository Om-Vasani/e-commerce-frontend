// src/pages/Home.js
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Welcome to ShopEase
        </Typography>
        <Typography variant="body1">
          Browse our latest products and enjoy seamless shopping.
        </Typography>
        <Typography>
          <Button component={Link} to="/products" sx={{ color: "" }}>
            Shop Now
          </Button>
        </Typography>
      </Container>
    </>
  );
};

export default Home;
