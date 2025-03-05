import { 
  Container, Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, IconButton, Box 
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Add, Remove, Delete } from "@mui/icons-material";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 3, textAlign: "center" }}>
        🛒 Shopping Cart
      </Typography>
      
      {cart.length === 0 ? (
        <Typography textAlign="center" variant="h6" sx={{ mt: 4 }}>Your cart is empty</Typography>
      ) : (
        <>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {cart.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia component="img" height="160" image={item.image} alt={item.name} />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      ₹{item.price} x {item.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Box>
                      <IconButton 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Remove />
                      </IconButton>
                      <Typography display="inline" variant="body1" sx={{ mx: 1 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Add />
                      </IconButton>
                    </Box>
                    <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                      <Delete />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Total Price & Checkout */}
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h5">Total: ₹{totalPrice.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} component={Link} to="/checkout">
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;
