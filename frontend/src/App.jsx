import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import { fetchContacts } from "./services/apiService";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    const data = await fetchContacts();
    setContacts(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Management</h1>
      <ContactForm reloadContacts={loadContacts} />
      <ContactsTable contacts={contacts} reloadContacts={loadContacts} loading={loading} />
    </div>
  );
};

export default App;
