import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="250" width={300} image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">₹{product.price}</Typography>
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ mt: 1 }} 
          component={Link} 
          to={`/product/${product.id}`}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
