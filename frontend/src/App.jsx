import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactsPage from "./pages/ContactsPage";
import Home from "./pages/Home";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
        <Route path="/edit-contact/:id" element={<EditContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
