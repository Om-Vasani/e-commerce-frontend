import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, Button, Grid, Container, Rating, Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Samsung Galaxy S21", type: "Phone", category: "Electronics", price: 70000, brand: "Samsung", },
  { id: 2, name: "Samsung Galaxy S22", type: "Phone", category: "Electronics", price: 85000, brand: "Samsung", },
  { id: 3, name: "Samsung Galaxy S23", type: "Phone", category: "Electronics", price: 95000, brand: "Samsung", },
  { id: 4, name: "Samsung Galaxy S24", type: "Phone", category: "Electronics", price: 105000, brand: "Samsung", image: "https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 5, name: "Samsung Galaxy S25", type: "Phone", category: "Electronics", price: 115000, brand: "Samsung" },
  { id: 6, name: "iPhone 11 Pro", type: "Phone", category: "Electronics", price: 65000, brand: "Apple", rating: 4.5, image: "iphone11.jpg" },
  { id: 7, name: "iPhone 12 Pro", type: "Phone", category: "Electronics", price: 75000, brand: "Apple", rating: 4.6, image: "iphone12.jpg" },
  { id: 8, name: "iPhone 13 Pro", type: "Phone", category: "Electronics", price: 85000, brand: "Apple", rating: 4.7, image: "iphone13.jpg" },
  { id: 9, name: "iPhone 14 Pro", type: "Phone", category: "Electronics", price: 95000, brand: "Apple", rating: 4.8, image: "iphone14.jpg" },
  { id: 10, name: "iPhone 15 Pro", type: "Phone", category: "Electronics", price: 105000, brand: "Apple", rating: 4.9, image: "iphone15.jpg" },

];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [reviewVisible, setReviewVisible] = useState(false);
  const [openReviewForm, setOpenReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ user: "", rating: 0, comment: "" });
  const [product, setProduct] = useState({ reviews: [] });

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    setTimeout(() => setReviewVisible(true), 500); // Delay for opacity effect
  }, [id]);

  if (!product) return <Typography>Product not found</Typography>;

  const handleReviewSubmit = () => {
    if (newReview.user && newReview.rating > 0 && newReview.comment) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        reviews: [...(prevProduct.reviews || []), newReview], // ✅ Use an empty array if `reviews` is undefined
      }));
      setOpenReviewForm(false);
      setNewReview({ user: "", rating: 0, comment: "" });
    }
  };

  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Card sx={{ width: 1000, height: "auto", display: "flex", flexDirection: "column", boxShadow: 3, p: 2 }}>
        <Grid container spacing={2}>
          {/* Left Column: Product Image */}
          <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ width: "100%", maxHeight: 400, objectFit: "contain", borderRadius: 2 }}
            />
          </Grid>

          {/* Right Column: Product Details */}
          <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>{product.name}</Typography>
              <Typography variant="body2">
                Currently unavailable.
                We don't know when or if this item will be back in stock.
                Brand	Samsung
                Operating System	Android 7.1, Android
                RAM Memory Installed Size	8 GB
                CPU Model	Snapdragon
                Memory Storage Capacity	128 GB
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                ₹{product.price ? product.price.toLocaleString() : "N/A"}
              </Typography>

            </CardContent>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                width: "80%",
                alignSelf: "center",
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
                transform: "translateX(0px)",
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ mt: 4, width: "100%", maxWidth: 1000, p: 2, boxShadow: 2, borderRadius: 2, backgroundColor: "white", opacity: reviewVisible ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Customer Reviews</Typography>
        {product.reviews > 0 ? (
          product.reviews.map((review, index) => (
            <Box key={index} sx={{ mt: 2, p: 2, borderRadius: 1, backgroundColor: "#f5f5f5" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{review.user}</Typography>
              <Rating value={review.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ mt: 1 }}>{review.comment}</Typography>
            </Box>
          ))
        ) : (
          <Typography sx={{ mt: 2, color: "gray" }}>No reviews yet.</Typography>
        )}
        <Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={() => setOpenReviewForm(true)}>Write a Review</Button>
      </Box>

      {/* Review Form Dialog */}
      <Dialog open={openReviewForm} onClose={() => setOpenReviewForm(false)}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
          <TextField label="Your Name" fullWidth margin="dense" value={newReview.user} onChange={(e) => setNewReview({ ...newReview, user: e.target.value })} />
          <Rating value={newReview.rating} precision={0.5} onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })} sx={{ mt: 2 }} />
          <TextField label="Your Review" multiline rows={3} fullWidth margin="dense" value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenReviewForm(false)} color="secondary">Cancel</Button>
          <Button onClick={handleReviewSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductDetail;
