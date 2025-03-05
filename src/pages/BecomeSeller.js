import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Alert, Card, CardContent } from "@mui/material";

const BecomeSeller = () => {
  const [user, setUser] = useState(null); // Simulated user login state
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated logged-in user check (Replace with actual authentication logic)
    const loggedInUser = JSON.parse(localStorage.getItem("user")); // Fetch from local storage or context
    setUser(loggedInUser);
  }, []);

  const handleRegister = async () => {
    if (!storeName) {
      setError("Store name is required");
      return;
    }
    setLoading(true);

    try {
      // Simulate API call (Replace with actual backend request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save seller status (Replace with actual API response handling)
      localStorage.setItem("seller", JSON.stringify({ storeName, sellerId: Date.now() }));

      navigate("/seller/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Failed to register as a seller. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Alert severity="warning">You must be logged in to become a seller.</Alert>
        <Button variant="contained" sx={{ mt: 2 }} href="/Sign">
          Log In
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ maxWidth: 400, width: "100%", p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Become a Seller
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Register your store to start selling on our platform.
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            fullWidth
            label="Store Name"
            variant="outlined"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            sx={{ mt: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BecomeSeller;
