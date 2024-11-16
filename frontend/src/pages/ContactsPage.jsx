// src/pages/ContactsPage.jsx
import React, { useState, useEffect } from "react";
import { fetchContacts } from "../services/apiService";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    loadContacts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsPage;
