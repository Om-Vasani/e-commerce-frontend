import { useState } from "react";
import { Container, TextField, Select, MenuItem, Grid, Checkbox, Typography, Box, FormControl, InputLabel } from "@mui/material";
import ProductCard from "../components/ProductCard";

const products = [
  // Electronics
  // Samsung Galaxy S Series
  { id: 1, name: "Samsung Galaxy S21", type: "Phone", category: "Electronics", price: 70000, brand: "Samsung", rating: 4.5, image: "s21.jpg" },
  { id: 2, name: "Samsung Galaxy S22", type: "Phone", category: "Electronics", price: 85000, brand: "Samsung", rating: 4.6, image: "s22.jpg" },
  { id: 3, name: "Samsung Galaxy S23", type: "Phone", category: "Electronics", price: 95000, brand: "Samsung", rating: 4.7, image: "s23.jpg" },
  { id: 4, name: "Samsung Galaxy S24", type: "Phone", category: "Electronics", price: 105000, brand: "Samsung", rating: 4.8, image: "https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 5, name: "Samsung Galaxy S25", type: "Phone", category: "Electronics", price: 115000, brand: "Samsung", rating: 4.9, image: "s25.jpg" },

  // Apple iPhone Series
  { id: 6, name: "iPhone 11 Pro", type: "Phone", category: "Electronics", price: 65000, brand: "Apple", rating: 4.5, image: "iphone11.jpg" },
  { id: 7, name: "iPhone 12 Pro", type: "Phone", category: "Electronics", price: 75000, brand: "Apple", rating: 4.6, image: "iphone12.jpg" },
  { id: 8, name: "iPhone 13 Pro", type: "Phone", category: "Electronics", price: 85000, brand: "Apple", rating: 4.7, image: "iphone13.jpg" },
  { id: 9, name: "iPhone 14 Pro", type: "Phone", category: "Electronics", price: 95000, brand: "Apple", rating: 4.8, image: "iphone14.jpg" },
  { id: 10, name: "iPhone 15 Pro", type: "Phone", category: "Electronics", price: 105000, brand: "Apple", rating: 4.9, image: "iphone15.jpg" },
  { id: 4, name: "MacBook Pro", type: "Laptop", category: "Electronics", price: 1999, brand: "Apple", rating: 4.9, image: "https://m.media-amazon.com/images/I/41swNfxYw0S._AC_.jpg" },
  { id: 5, name: "Dell XPS 15", type: "Laptop", category: "Electronics", price: 1499, brand: "Dell", rating: 4.7, image: "laptop.jpg" },
  { id: 6, name: "ThinkPad X1", type: "Laptop", category: "Electronics", price: 1299, brand: "Lenovo", rating: 4.6, image: "laptop.jpg" },
  { id: 7, name: "OLED TV", type: "TV", category: "Electronics", price: 2499, brand: "LG", rating: 4.9, image: "tv.jpg" },
  { id: 8, name: "QLED TV", type: "TV", category: "Electronics", price: 2199, brand: "Samsung", rating: 4.8, image: "tv.jpg" },
  { id: 9, name: "Smart TV", type: "TV", category: "Electronics", price: 999, brand: "Sony", rating: 4.7, image: "tv.jpg" },
  { id: 10, name: "Ceiling Fan", type: "Fan", category: "Electronics", price: 150, brand: "Havells", rating: 4.5, image: "fan.jpg" },
  { id: 11, name: "Tower Fan", type: "Fan", category: "Electronics", price: 200, brand: "Dyson", rating: 4.7, image: "fan.jpg" },
  { id: 12, name: "Table Fan", type: "Fan", category: "Electronics", price: 80, brand: "Usha", rating: 4.3, image: "fan.jpg" },
  // Men's Fashion
  { id: 1, name: "Casual T-Shirt", type: "T-shirt", category: "Men's Fashion", price: 25, brand: "Nike", rating: 4.5, image: "tshirt.jpg" },
  { id: 2, name: "Printed T-Shirt", type: "T-shirt", category: "Men's Fashion", price: 30, brand: "Adidas", rating: 4.6, image: "tshirt.jpg" },
  { id: 3, name: "Plain Cotton T-Shirt", type: "T-shirt", category: "Men's Fashion", price: 20, brand: "Puma", rating: 4.3, image: "tshirt.jpg" },
  { id: 4, name: "Slim Fit Jeans", type: "Pants", category: "Men's Fashion", price: 50, brand: "Levi's", rating: 4.7, image: "pants.jpg" },
  { id: 5, name: "Chinos", type: "Pants", category: "Men's Fashion", price: 45, brand: "H&M", rating: 4.4, image: "pants.jpg" },
  { id: 6, name: "Joggers", type: "Pants", category: "Men's Fashion", price: 40, brand: "Zara", rating: 4.6, image: "pants.jpg" },
  { id: 7, name: "Running Shoes", type: "Shoes", category: "Men's Fashion", price: 100, brand: "Nike", rating: 4.8, image: "shoes.jpg" },
  { id: 8, name: "Casual Sneakers", type: "Shoes", category: "Men's Fashion", price: 80, brand: "Adidas", rating: 4.6, image: "shoes.jpg" },
  { id: 9, name: "Formal Shoes", type: "Shoes", category: "Men's Fashion", price: 120, brand: "Bata", rating: 4.5, image: "shoes.jpg" },
  // Women's Fashion
  { id: 4, name: "Dress", category: "Women's Fashion", price: 80, brand: "Zara", rating: 4.2, image: "fashion.jpg" },
  // Kitchen
  { id: 5, name: "Blender", category: "Kitchen Appliances", price: 60, brand: "Philips", rating: 3.9, image: "kitchen.jpg" },
];

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState([0, 1000]);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    product.price >= price[0] && product.price <= price[1] &&
    product.rating >= rating
  );

  if (sort === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>Products</Typography>

      {/* 🔹 Filters */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <TextField
          label="Search Products"
          size="small"
          sx={{ flex: 1, minWidth: "200px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <Select
          size="small"
          value={selectedCategories}
          displayEmpty
          multiple
          onChange={(e) => setSelectedCategories(e.target.value)}
          sx={{ minWidth: "170px" }}
          renderValue={(selected) => (selected.length === 0 ? "Categories" : selected.join(", "))}
        >
          <MenuItem disabled><strong>Categories</strong></MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={selectedCategories.includes(category)} /> {category}
            </MenuItem>
          ))}
        </Select>

        {/* Brand Filter */}
        <Select
          size="small"
          value={selectedBrands}
          displayEmpty
          multiple
          onChange={(e) => setSelectedBrands(e.target.value)}
          sx={{ minWidth: "150px" }}
          renderValue={(selected) => (selected.length === 0 ? "Brands" : selected.join(", "))}
        >
          <MenuItem disabled><strong>Brands</strong></MenuItem>
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              <Checkbox checked={selectedBrands.includes(brand)} /> {brand}
            </MenuItem>
          ))}
        </Select>
        <FormControl size="small" sx={{ minWidth: "200px" }}>
          <Select
            labelId="price-filter-label"
            value={price.join("-")}
            onChange={(e) => {
              const [min, max] = e.target.value.split("-").map(Number);
              setPrice([min, max]);
            }}
          >

            <MenuItem value="0-300">Below ₹300</MenuItem>
            <MenuItem value="300-1000">₹300 - ₹1000</MenuItem>
            <MenuItem value="1000-2000">₹1000 - ₹2000</MenuItem>
            <MenuItem value="2000-5000">₹2000 - ₹5000</MenuItem>
            <MenuItem value="5000-Infinity">Above ₹5000</MenuItem>
          </Select>
        </FormControl>
        {/* Rating Filter */}
        <Select size="small" value={rating} onChange={(e) => setRating(e.target.value)} sx={{ minWidth: "150px" }}>
          <MenuItem value={0}>All Ratings</MenuItem>
          <MenuItem value={4}>4+ Stars</MenuItem>
          <MenuItem value={4.5}>4.5+ Stars</MenuItem>
        </Select>

        <FormControl size="small" sx={{ minWidth: "200px" }}>
          <InputLabel id="price-sort-label">Sort by Price</InputLabel>
          <Select
            labelId="price-sort-label"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="below-300-to-5000">Price: Low to High (Below ₹300 to ₹5000)</MenuItem>
            <MenuItem value="5000-to-below-300">Price: High to Low (₹5000 to Below ₹300)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* 🔹 Display Products */}
      <Grid container spacing={2}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ mt: 2, color: "red" }}>⚠ No products found. Try different filters.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ProductList;