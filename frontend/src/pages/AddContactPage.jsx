// src/pages/AddContactPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../services/apiService";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const AddContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
  });

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setContact({ ...contact, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addContact(contact);
  //     navigate("/contacts"); // Navigate to contacts list after successful addition
  //   } catch (error) {
  //     console.error("Error adding contact:", error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData);
    setFormData({ first_name: "", last_name: "", email: "", phone: "", company: "", job_title: "" });
    navigate("/contacts"); // Navigate to contacts list after successful addition
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
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <TextField
            label="Job Title"
            name="job_title"
            value={formData.job_title}
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
