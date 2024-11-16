import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContactById, updateContact } from "../services/apiService";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const EditContactPage = () => {
  const { id } = useParams(); // Get the contact ID from the route parameters
  console.log("Fetching contact with ID:", id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
  });

  const [loading, setLoading] = useState(true);

  // Load contact data for the given ID
  const loadContact = async () => {
    try {
      const contact = await getContactById(id); // Fetch contact details by ID
      setFormData(contact); // Populate form data
      setLoading(false);
    } catch (error) {
      console.error("Error loading contact data:", error);
    }
  };

  useEffect(() => {
    loadContact();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact(id, formData); // Update the contact in the database
      console.log("Contact updated; navigating back to contact");
      alert('Contact updated successfully!');
      navigate("/contacts"); // Navigate back to the contacts list
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  if (loading) return <p>Loading contact data...</p>;

  return (
    <Paper elevation={3} style={{ padding: "25px", maxWidth: "600px", margin: "20px auto" }}>
      <Typography variant="h5" align="center" marginBottom={2} gutterBottom>
        Edit Contact
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

          <Button
            variant="contained"
            type="submit"
            sx={{
              padding: "10px 20px",
            }}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default EditContactPage;
