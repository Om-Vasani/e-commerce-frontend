import { useState } from "react";
import { Box, IconButton, Badge, Popover, TextField } from "@mui/material";
import { AccountCircle, ShoppingCart, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MobileMenu = ({ onSearch }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Open Popover on Search Icon Click
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Search
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery);
      handleClose(); // Close after searching
    }
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: "10px" }}>
      {/* Search Icon */}
      <IconButton sx={{ color: "white" }} onClick={handleOpen}>
        <Search />
      </IconButton>

      {/* Search Popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <TextField
          autoFocus
          variant="outlined"
          size="small"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          sx={{ m: 1, width: "250px" }}
        />
      </Popover>

      {/* Account & Cart Icons */}
      <IconButton sx={{ color: "white" }} component={Link} to="/AccountMenu">
        <AccountCircle />
      </IconButton>
      <IconButton sx={{ color: "white" }} component={Link} to="/cart">
        <Badge badgeContent={0} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default MobileMenu;
