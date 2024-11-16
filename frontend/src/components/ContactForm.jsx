import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { addContact } from "../services/apiService";

const ContactForm = ({ reloadContacts }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData);
    setFormData({ first_name: "", last_name: "", email: "", phone: "", company: "", job_title: "" });
    reloadContacts();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField name="first_name" label="First Name" value={formData.first_name} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="last_name" label="Last Name" value={formData.last_name} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="company" label="Company" value={formData.company} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="job_title" label="Job Title" value={formData.job_title} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
