import { Container, Typography, Avatar, Paper, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Profile = () => {
  // Mock user data (Replace with actual user data from backend)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "http://flipkart.com/account", // Replace with actual profile image
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center", mt: 5 }}>
        <Avatar
          src={user.profilePic}
          alt={user.name}
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        />
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {user.email}
        </Typography>

        {/* Sign Up & Log In Buttons */}
        <IconButton color="inherit" component={Link} to="/signup">
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/login">
          <AccountCircleIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default Profile;
