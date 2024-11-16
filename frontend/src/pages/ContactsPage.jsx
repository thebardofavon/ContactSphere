import React, { useState, useEffect } from "react";
import { fetchContacts, deleteContact } from "../services/apiService";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      alert('Contact deleted successfully!');
      loadContacts(); // Reload contacts after successful deletion
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEdit = (id) => {
    // Navigate to an edit page, passing the contact ID
    navigate(`/edit-contact/${id}`);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.first_name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.job_title}</TableCell>
              <TableCell>
                <Button 
                  color="primary" 
                  variant="contained" 
                  size="small" 
                  onClick={() => handleEdit(contact.id)} 
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Button>
                <Button 
                  color="secondary" 
                  variant="contained" 
                  size="small" 
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsPage;
