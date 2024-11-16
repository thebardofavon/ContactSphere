import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { deleteContact } from "../services/apiService";

const ContactsTable = ({ contacts, reloadContacts, loading }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
    reloadContacts();
  };

  if (loading) return <p>Loading...</p>;

  return (
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
              <Button color="secondary" onClick={() => handleDelete(contact.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactsTable;
