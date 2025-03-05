import { 
  Container, Typography, Button, List, ListItem, ListItemText} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => { 
  const { cart } = useContext(CartContext);
  
  // Address and Payment State
  const [paymentMethod] = useState("card");

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  
  // Payment method labels
  const paymentLabels = {
    card: "💳 Credit/Debit Card",
    "upi": "📱 UPI",
    "net-banking": "🏦 Net Banking",
    "wallet": "💰 Wallet",
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
        🛍 Checkout
      </Typography>

      <List sx={{ mt: 3 }}>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`₹${item.price} x ${item.quantity}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" sx={{ mt: 2 }}>Total: ₹{totalPrice.toFixed(2)}</Typography>

      {/* Pay Button */}
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 3 }} 
      >
        Pay with {paymentLabels[paymentMethod]}
      </Button>
    </Container>
  );
};

export default Checkout;
