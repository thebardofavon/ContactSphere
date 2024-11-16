import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #1976d2, #2196f3)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px", // Padding to keep content from touching edges
        }}
      >
        <Typography
          variant="h5"
          sx={{
              fontWeight: "bold",
            fontSize: "1.4rem",
            color: "#fff", // White text color
            letterSpacing: "1px", // Slight spacing for a modern touch
          }}
        >
          Contact Manager
        </Typography>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: "1rem",
              marginRight: "15px",
              "&:hover": {
                backgroundColor: "#1976d2", // Darken on hover
                borderRadius: "5px",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contacts"
            sx={{
              fontSize: "1rem",
              marginRight: "15px",
              "&:hover": {
                backgroundColor: "#1976d2",
                borderRadius: "5px",
              },
            }}
          >
            View Contacts
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/add-contact"
            sx={{
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#1976d2",
                borderRadius: "5px",
              },
            }}
          >
            Add Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
