import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1c1c1c", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section 1: Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              ShopEase
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              Your one-stop shop for the latest trends and quality products at unbeatable prices.
            </Typography>
          </Grid>

          {/* Section 2: Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Customer Service
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
              <Link href="/faq" color="inherit" underline="hover">
                FAQs
              </Link>
              <Link href="/returns" color="inherit" underline="hover">
                Returns & Refunds
              </Link>
              <Link href="/shipping" color="inherit" underline="hover">
                Shipping Policy
              </Link>
            </Box>
          </Grid>

          {/* Section 3: Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Follow Us
            </Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://youtube.com" target="_blank" color="inherit">
                <YouTube />
              </IconButton>
              <IconButton href="https://Linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Section 4: Newsletter Subscription */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter your email"
                sx={{ bgcolor: "white", borderRadius: "4px", flexGrow: 1 }}
              />
              <Button variant="contained" color="secondary" sx={{ ml: 1 }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", mt: 3, pt: 2, borderTop: "1px solid gray" }}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
