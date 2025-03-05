import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (Fetching from localStorage for demo)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setUser(null); // Reset user state
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box>
      {user ? (
        <>
          {/* Show Avatar when logged in */}
          <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
            <Avatar alt={user.name} src={user.avatar} sx={{ width: 32, height: 32 }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem disabled>
              <Typography variant="body1">Welcome, {user.name}!</Typography>
            </MenuItem>
            <Divider />
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
              My Profile
            </MenuItem>
            <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>
              My Orders
            </MenuItem>
            <MenuItem component={Link} to="/wishlist" onClick={handleMenuClose}>
              Wishlist
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          {/* Show Login button when logged out */}
          <Button variant="contained" color="secondary" onClick={handleMenuOpen}>
            Account
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
              Sign Up
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
};

export default AccountMenu;
