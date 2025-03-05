import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Badge, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { Notifications, HeadsetMic, Campaign, GetApp, Storefront, Contacts } from "@mui/icons-material";
import { Search, ShoppingCart, Menu as MenuIcon, Close } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import AccountMenu from "../AccountMenu";
import MobileMenu from "../pages/MobileMenu"; // Import MobileMenu

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
  backgroundColor: "#2874F0",
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: "4px",
  flexGrow: 1,
  maxWidth: "600px",
}));

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "0.3s",
  "&:hover": {
    color: "#ff9f00",
  },
});

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuClick = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* Left Side - Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <IconButton sx={{ color: "white", display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }}>
            <StyledLink to="/">ShopEase</StyledLink>
          </Typography>
        </Box>

        {/* Search Bar for Desktop */}
        <SearchContainer sx={{ display: { xs: "none", sm: "flex" } }}>
          <Search sx={{ color: "gray", marginRight: "5px" }} />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: "100%", border: "none", outline: "none", fontSize: "16px" }}
          />
        </SearchContainer>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "20px" }}>
          <AccountMenu />
          <Button component={Link} to="/cart" sx={{ color: "white", display: "flex", alignItems: "center", gap: "5px" }}>
            <Badge badgeContent={0} color="error">
              <ShoppingCart />
            </Badge>
            Cart
          </Button>
          <Button component={Link} to="/become-seller" sx={{ color: "white", fontWeight: "bold" }}>Become a Seller</Button>
        </Box>

        {/* Mobile Menu */}
        <MobileMenu onSearch={(query) => setSearchQuery(query)} />
      </StyledToolbar>

      {/* Dropdown Menu for Small Screens */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Notifications sx={{ marginRight: 1 }} />
          Notifications
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <HeadsetMic sx={{ marginRight: 1 }} />
          Customer Care
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Campaign sx={{ marginRight: 1 }} />
          Advertise
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <GetApp sx={{ marginRight: 1 }} />
          Download App
        </MenuItem>
      </Menu>

      {/* Mobile Drawer (Side Menu) */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <Close />
          </IconButton>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemIcon><Storefront /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/become-seller" onClick={toggleDrawer(false)}>
              <ListItemIcon><Storefront /></ListItemIcon>
              <ListItemText primary="Become a Seller" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemIcon><Contacts /></ListItemIcon> {/* Added Contact Page Icon */}
              <ListItemText primary="Contact" />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleMenuClick}>
              <ListItemIcon><Notifications /></ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button onClick={handleMenuClick}>
              <ListItemIcon><HeadsetMic /></ListItemIcon>
              <ListItemText primary="Customer Care" />
            </ListItem>
            <ListItem button onClick={handleMenuClick}>
              <ListItemIcon><Campaign /></ListItemIcon>
              <ListItemText primary="Advertise" />
            </ListItem>
            <ListItem button onClick={handleMenuClick}>
              <ListItemIcon><GetApp /></ListItemIcon>
              <ListItemText primary="Download App" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
