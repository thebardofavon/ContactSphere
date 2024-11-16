// src/pages/AddContactPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../services/apiService";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const AddContactPage = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(contact);
      navigate("/contacts"); // Navigate to contacts list after successful addition
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
      <Typography variant="h5" gutterBottom>
        Add New Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="15px">
          <TextField
            label="First Name"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={contact.phoneNumber}
            onChange={handleChange}
            required
          />
          <TextField
            label="Company"
            name="company"
            value={contact.company}
            onChange={handleChange}
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={contact.jobTitle}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Add Contact
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AddContactPage;
