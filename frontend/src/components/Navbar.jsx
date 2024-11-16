// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Contact Manager
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/contacts">
          View All Contacts
        </Button>
        <Button color="inherit" component={Link} to="/add-contact">
          Add Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
